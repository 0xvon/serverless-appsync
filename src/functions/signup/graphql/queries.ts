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
export const getLessonPlan = /* GraphQL */ `
  query GetLessonPlan($id: ID!) {
    getLessonPlan(id: $id) {
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
      planId
      plan {
        id
        title
        price
        term
        message
        createdAt
        updatedAt
      }
      lesson_day
      createdAt
      updatedAt
    }
  }
`;
export const listLessonPlans = /* GraphQL */ `
  query ListLessonPlans(
    $filter: ModelLessonPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        planId
        plan {
          id
          title
          price
          term
          message
          createdAt
          updatedAt
        }
        lesson_day
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      studentId
      student {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      teacherId
      teacher {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      description
      meeting_url
      start_time
      end_time
      feedbacks {
        items {
          id
          lessonId
          from
          to
          satification
          message
          createdAt
          updatedAt
        }
        nextToken
      }
      notes {
        items {
          id
          lessonId
          authorId
          text
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        student {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        teacherId
        teacher {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        description
        meeting_url
        start_time
        end_time
        feedbacks {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      title
      author
      participants {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      address
      url
      start_at
      end_at
      description
      createdAt
      updatedAt
    }
  }
`;
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        participants {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        address
        url
        start_at
        end_at
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLessonFeedback = /* GraphQL */ `
  query GetLessonFeedback($id: ID!) {
    getLessonFeedback(id: $id) {
      id
      lessonId
      lesson {
        id
        studentId
        student {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        teacherId
        teacher {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        description
        meeting_url
        start_time
        end_time
        feedbacks {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      from
      fromUser {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      to
      toUser {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      satification
      message
      createdAt
      updatedAt
    }
  }
`;
export const listLessonFeedbacks = /* GraphQL */ `
  query ListLessonFeedbacks(
    $filter: ModelLessonFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lessonId
        lesson {
          id
          studentId
          teacherId
          description
          meeting_url
          start_time
          end_time
          createdAt
          updatedAt
        }
        from
        fromUser {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        to
        toUser {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        satification
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      lessonId
      lesson {
        id
        studentId
        student {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        teacherId
        teacher {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        description
        meeting_url
        start_time
        end_time
        feedbacks {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      author {
        id
        cognito_username
        email
        role
        createdAt
        updatedAt
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lessonId
        lesson {
          id
          studentId
          teacherId
          description
          meeting_url
          start_time
          end_time
          createdAt
          updatedAt
        }
        authorId
        author {
          id
          cognito_username
          email
          role
          createdAt
          updatedAt
        }
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      title
      price
      term
      message
      createdAt
      updatedAt
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        term
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
