import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { middyfy } from '@libs/lambda';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import schema from './schema';
import * as api from './graphql/Model';
import * as mutations from './graphql/mutations';
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

        const createTeacherInput: api.CreateTeacherInput = {
            userId: userId,
            name: event.body.name,
            english_name: event.body.english_name,
            phone_number: event.body.phone_number,
            address: event.body.address,
            nationality: event.body.nationality,
        };
        const createTeacherResponse = await createTeacher(appSyncClient, createTeacherInput);
        console.log(`teacherId is: ${createTeacherResponse.data.createTeacher.id}`);

        return formatJSONResponse({
            result: createTeacherResponse.data.createTeacher,
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

const createTeacher = async (appSyncClient: AWSAppSyncClient<NormalizedCacheObject>, input: api.CreateTeacherInput): Promise<api.Output<api.CreateTeacherMutation>> => {
    const createTeacherResponse = await appSyncClient.mutate({
        mutation: gql(mutations.createTeacher),
        variables: { input: input },
    }) as api.Output<api.CreateTeacherMutation>;

    return createTeacherResponse;
}

export const main = middyfy(hello);
