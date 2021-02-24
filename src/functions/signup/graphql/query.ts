// import * as gql from 'graphql-tag';
const gql = require('graphql-tag');

export const listUsers = gql(`
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
        }
        nextToken
    }
    }
`);