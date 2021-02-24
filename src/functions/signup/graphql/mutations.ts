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
export const createLessonPlan = /* GraphQL */ `
  mutation CreateLessonPlan(
    $input: CreateLessonPlanInput!
    $condition: ModelLessonPlanConditionInput
  ) {
    createLessonPlan(input: $input, condition: $condition) {
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
export const updateLessonPlan = /* GraphQL */ `
  mutation UpdateLessonPlan(
    $input: UpdateLessonPlanInput!
    $condition: ModelLessonPlanConditionInput
  ) {
    updateLessonPlan(input: $input, condition: $condition) {
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
export const deleteLessonPlan = /* GraphQL */ `
  mutation DeleteLessonPlan(
    $input: DeleteLessonPlanInput!
    $condition: ModelLessonPlanConditionInput
  ) {
    deleteLessonPlan(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createLessonFeedback = /* GraphQL */ `
  mutation CreateLessonFeedback(
    $input: CreateLessonFeedbackInput!
    $condition: ModelLessonFeedbackConditionInput
  ) {
    createLessonFeedback(input: $input, condition: $condition) {
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
export const updateLessonFeedback = /* GraphQL */ `
  mutation UpdateLessonFeedback(
    $input: UpdateLessonFeedbackInput!
    $condition: ModelLessonFeedbackConditionInput
  ) {
    updateLessonFeedback(input: $input, condition: $condition) {
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
export const deleteLessonFeedback = /* GraphQL */ `
  mutation DeleteLessonFeedback(
    $input: DeleteLessonFeedbackInput!
    $condition: ModelLessonFeedbackConditionInput
  ) {
    deleteLessonFeedback(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
