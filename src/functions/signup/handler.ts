import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { middyfy } from '@libs/lambda';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import schema from './schema';
import * as api from './graphql/Model';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import 'isomorphic-fetch';

const gql = require('graphql-tag');
const env = require("process").env;
const region = env.AWS_REGION;
const appSyncUrl = env.ENDPOINT_URL;
const apiKey = env.API_KEY;

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const appSyncClient = new AWSAppSyncClient({
        url: appSyncUrl,
        region,
        auth: {
            type: AUTH_TYPE.API_KEY,
            apiKey: apiKey,
        },
        disableOffline: true
    });

    try {
        console.log(event.body);
        const createUserInput: api.CreateUserInput = {
            cognito_username: 'tmp',
            email: event.body.email,
            role: event.body.role,
        };
        const createUserResponse = await createUser(appSyncClient, createUserInput);
        const userId = createUserResponse.data.createUser.id;
        console.log(`userId is: ${userId}`);

        const listUsersFilter: api.ModelUserFilterInput = {
            id: { eq: userId },
        };
        const user = await getUser(appSyncClient, listUsersFilter);

        return formatJSONResponse({
            result: user,
        });
    } catch (err) {
        return formatJSONResponse({
            result: err,
        });
    };
};

const createUser = async (appSyncClient: AWSAppSyncClient<NormalizedCacheObject>, input: api.CreateUserInput): Promise<api.Output<api.CreateUserMutation>> => {
    const createUserResponse = await appSyncClient.mutate({
        mutation: gql(mutations.createUser),
        variables: { input: input },
    }) as api.Output<api.CreateUserMutation>;

    return createUserResponse;
}

const getUser = async (appSyncClient: AWSAppSyncClient<NormalizedCacheObject>, filter: api.ModelUserFilterInput): Promise<api.User | undefined> => {
    const listUsersResponse = await appSyncClient.query({
        fetchPolicy: 'network-only',
        query: gql(queries.listUsers),
        variables: filter,
    }) as api.Output<api.ListUsersQuery>;

    const user = listUsersResponse.data.listUsers.items[0] as api.User | undefined;
    return user;
}

export const main = middyfy(hello);
