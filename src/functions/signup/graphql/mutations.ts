/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognito_username
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognito_username
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognito_username
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createStudentAvailableDay = /* GraphQL */ `
  mutation CreateStudentAvailableDay(
    $input: CreateStudentAvailableDayInput!
    $condition: ModelStudentAvailableDayConditionInput
  ) {
    createStudentAvailableDay(input: $input, condition: $condition) {
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
export const updateStudentAvailableDay = /* GraphQL */ `
  mutation UpdateStudentAvailableDay(
    $input: UpdateStudentAvailableDayInput!
    $condition: ModelStudentAvailableDayConditionInput
  ) {
    updateStudentAvailableDay(input: $input, condition: $condition) {
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
export const deleteStudentAvailableDay = /* GraphQL */ `
  mutation DeleteStudentAvailableDay(
    $input: DeleteStudentAvailableDayInput!
    $condition: ModelStudentAvailableDayConditionInput
  ) {
    deleteStudentAvailableDay(input: $input, condition: $condition) {
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
export const createTeacherAvailableDay = /* GraphQL */ `
  mutation CreateTeacherAvailableDay(
    $input: CreateTeacherAvailableDayInput!
    $condition: ModelTeacherAvailableDayConditionInput
  ) {
    createTeacherAvailableDay(input: $input, condition: $condition) {
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
export const updateTeacherAvailableDay = /* GraphQL */ `
  mutation UpdateTeacherAvailableDay(
    $input: UpdateTeacherAvailableDayInput!
    $condition: ModelTeacherAvailableDayConditionInput
  ) {
    updateTeacherAvailableDay(input: $input, condition: $condition) {
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
export const deleteTeacherAvailableDay = /* GraphQL */ `
  mutation DeleteTeacherAvailableDay(
    $input: DeleteTeacherAvailableDayInput!
    $condition: ModelTeacherAvailableDayConditionInput
  ) {
    deleteTeacherAvailableDay(input: $input, condition: $condition) {
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
