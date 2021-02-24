import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync';
import schema from './schema';
import { ModelUserFilterInput } from './graphql/API';
import * as queries from './graphql/query';
require('isomorphic-fetch');

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

    const listUsersInput: ModelUserFilterInput = {
        email: { eq: 'masato.11.soccer+cassette@gmail.com' },
    };

    try {
        const { data } = await appSyncClient.query({
            fetchPolicy: 'network-only',
            query: queries.listUsers,
            variables: listUsersInput,
        });

        return formatJSONResponse({
            result: data,
        });
    } catch (err) {
        return formatJSONResponse({
            result: err,
        });
    };
}

export const main = middyfy(hello);
