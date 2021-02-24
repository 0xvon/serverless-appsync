import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { AWSAppSyncClient, AUTH_TYPE,  } from 'aws-appsync';
import schema from './schema';
import * as api from './graphql/API';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import { User, List } from './graphql/type';
require('isomorphic-fetch');
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

    // const createTeacherInput: api.CreateTeacherInput = {
    //     id?: string;
    //     userId: string;
    //     name: string;
    //     english_name: string;
    //     phone_number: string;
    //     address: string;
    //     biography?: string;
    //     nationality: string;
    //     meeting_url?: string;
    // }
    try {
        console.log(event.body);
        const createUserInput: api.CreateUserInput = {
            cognito_username: 'tmp',
            email: event.body.email,
            role: event.body.role,
        };

        const createUserResponse = await appSyncClient.mutate({
            mutation: gql(mutations.createUser),
            variables: { input: createUserInput },
        });
        console.log(createUserResponse.data);

        const listUsersInput: api.ModelUserFilterInput = {
            email: { eq: 'masato.11.soccer+cassette@gmail.com' },
        };

        const listUsersResponse = await appSyncClient.query({
            fetchPolicy: 'network-only',
            query: gql(queries.listUsers),
            variables: listUsersInput,
        });
        const userData = listUsersResponse.data as List<User>;
        const user = userData.listUsers.items[0];
        console.log(user);

        return formatJSONResponse({
            result: createUserResponse.data,
        });
    } catch (err) {
        return formatJSONResponse({
            result: err,
        });
    };
};

export const main = middyfy(hello);
