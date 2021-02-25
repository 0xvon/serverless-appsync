/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognito_username
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
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
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      userId
      user {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      name
      english_name
      phone_number
      address
      state
      available_days {
        items {
          id
          studentId
          day
          start_at
          end_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        name
        english_name
        phone_number
        address
        state
        available_days {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentAvailableDay = /* GraphQL */ `
  query GetStudentAvailableDay($id: ID!) {
    getStudentAvailableDay(id: $id) {
      id
      studentId
      student {
        id
        userId
        user {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        name
        english_name
        phone_number
        address
        state
        available_days {
          nextToken
        }
        createdAt
        updatedAt
      }
      day
      start_at
      end_at
      createdAt
      updatedAt
    }
  }
`;
export const listStudentAvailableDays = /* GraphQL */ `
  query ListStudentAvailableDays(
    $filter: ModelStudentAvailableDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentAvailableDays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        student {
          id
          userId
          name
          english_name
          phone_number
          address
          state
          createdAt
          updatedAt
        }
        day
        start_at
        end_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      userId
      user {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      name
      english_name
      phone_number
      address
      available_days {
        items {
          id
          teacherId
          day
          start_at
          end_at
          createdAt
          updatedAt
        }
        nextToken
      }
      biography
      nationality
      meeting_url
      createdAt
      updatedAt
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        name
        english_name
        phone_number
        address
        available_days {
          nextToken
        }
        biography
        nationality
        meeting_url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeacherAvailableDay = /* GraphQL */ `
  query GetTeacherAvailableDay($id: ID!) {
    getTeacherAvailableDay(id: $id) {
      id
      teacherId
      teacher {
        id
        userId
        user {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        name
        english_name
        phone_number
        address
        available_days {
          nextToken
        }
        biography
        nationality
        meeting_url
        createdAt
        updatedAt
      }
      day
      start_at
      end_at
      createdAt
      updatedAt
    }
  }
`;
export const listTeacherAvailableDays = /* GraphQL */ `
  query ListTeacherAvailableDays(
    $filter: ModelTeacherAvailableDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeacherAvailableDays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teacherId
        teacher {
          id
          userId
          name
          english_name
          phone_number
          address
          biography
          nationality
          meeting_url
          createdAt
          updatedAt
        }
        day
        start_at
        end_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
