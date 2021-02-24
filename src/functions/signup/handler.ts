import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { AWSAppSyncClient, AUTH_TYPE,  } from 'aws-appsync';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import schema from './schema';
import * as api from './graphql/API';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
require('isomorphic-fetch');
const gql = require('graphql-tag');

const env = require("process").env;
const region = env.AWS_REGION;
const appSyncUrl = env.ENDPOINT_URL;
const apiKey = env.API_KEY;

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const appSyncClient: AWSAppSyncClient<NormalizedCacheObject> = new AWSAppSyncClient({
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
    console.log('start');
    try {
        console.log('try!');

        await appSyncClient.mutate({
            fetchPolicy: 'network-only',
            mutation: gql(mutations.createUser),
            variables: {
                cognito_username: '',
                email: event.body.email,
                role: event.body.role,
            },
        });

        const { data } = await appSyncClient.query({
            fetchPolicy: 'network-only',
            query: gql(queries.listUsers),
            variables: {
                email: { eq: event.body.email },
            },
        });
        console.log(data);

        return formatJSONResponse({
            result: data,
        });
    } catch (err) {
        return formatJSONResponse({
            result: err,
        });
    };
};

// async function createUser(appSyncClient: AWSAppSyncClient<NormalizedCacheObject>, input: api.CreateUserInput) {
//     const { createUserData } = await appSyncClient.mutate({
//         fetchPolicy: 'network-only',
//         mutation: gql(mutations.createUser),
//         variables: input,
//     });

//     return createUserData;
// };

// async function getUser(appSyncClient: AWSAppSyncClient<NormalizedCacheObject>, input: api.ModelUserFilterInput) {
//     const { data } = await appSyncClient.query({
//         fetchPolicy: 'network-only',
//         query: gql(queries.listUsers),
//         variables: input,
//     });

//     return data;
// };

export const main = middyfy(hello);
