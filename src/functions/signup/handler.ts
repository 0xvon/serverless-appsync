import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { AWSAppSyncClient, AUTH_TYPE,  } from 'aws-appsync';
import schema from './schema';
import * as api from './graphql/API';
// import * as queries from './graphql/queries';
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

        const createUserResponse = await appSyncClient.mutate({
            mutation: gql(mutations.createUser),
            variables: { input: createUserInput },
        }) as api.CreateUserMutation;

        // const listUsersInput: api.ModelUserFilterInput = {
        //     email: { eq: 'masato.11.soccer+cassette@gmail.com' },
        // };

        // const listUsersResponse = await appSyncClient.query({
        //     fetchPolicy: 'network-only',
        //     query: gql(queries.listUsers),
        //     variables: listUsersInput,
        // });
        // const userData = listUsersResponse.data as api.ListUsersQuery;
        // const user = userData.listUsers.items[0];

        const createTeacherInput: api.CreateTeacherInput = {
            userId: createUserResponse.createUser.id,
            name: event.body.name,
            english_name: event.body.english_name,
            phone_number: event.body.phone_number,
            address: event.body.address,
            nationality: event.body.nationality,
        };

        const createTeacherResponse = await appSyncClient.mutate({
            mutation: gql(mutations.createTeacher),
            variables: { input: createTeacherInput },
        }) as api.CreateTeacherMutation;

        return formatJSONResponse({
            result: createTeacherResponse.createTeacher,
        });
    } catch (err) {
        return formatJSONResponse({
            result: err,
        });
    };
};

export const main = middyfy(hello);
