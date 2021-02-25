import type { AWS } from '@serverless/typescript';

import { signup } from './src/functions';

const serverlessConfiguration: AWS = {
    service: 'serverless-playground',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true
        },
        'serverless-layers': {
            layersDeploymentBucket: 'sample-lambda',
            dependenciesPath: './package.json',
        },
        apiKeys: [
            {
                name: 'sample',
            },
        ],
    },
    plugins: [
        'serverless-webpack',
        'serverless-layers',
        'serverless-add-api-key',
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'ap-northeast-1',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
        iam: {
            role: {
                statements: [
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
                            "appsync:GraphQL",
                            "logs:CreateLogGroup",
                            "logs:CreateLogStream",
                            "logs:PutLogEvents",
                        ],
                        Resource: "*",
                    },
                ]
            }
        },
    },
    functions: { signup }
}

module.exports = serverlessConfiguration;
