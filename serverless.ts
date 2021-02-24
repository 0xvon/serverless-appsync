import type { AWS } from '@serverless/typescript';

import { signup } from './src/functions';

const serverlessConfiguration: AWS = {
    service: 'cassette-serverless',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true
        },
        'serverless-layers': {
            layersDeploymentBucket: 'cassette-lambda',
            dependenciesPath: './prd/package.json',
        },

    },
    plugins: [
        'serverless-webpack',
        'serverless-layers',
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
        iamRoleStatements: [
            {
                Effect: "Allow",
                Action: [
                    "s3:PutObject",
                    "dynamodb:PutItem",
                    "dynamodb:GetItem",
                    "dynamodb:DescribeStream",
                    "dynamodb:GetRecords",
                    "dynamodb:GetShardIterator",
                    "dynamodb:ListStreams",
                    "logs:CreateLogGroup",
                    "logs:CreateLogStream",
                    "logs:PutLogEvents",
                ],
                Resource: "*",
              },
        ]
    },
    functions: { signup }
}

module.exports = serverlessConfiguration;
