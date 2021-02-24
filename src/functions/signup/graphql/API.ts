/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
    id?: string | null,
    cognito_username: string,
    email: string,
    role: string,
};

export type ModelUserConditionInput = {
    cognito_username?: ModelStringInput | null,
    email?: ModelStringInput | null,
    role?: ModelStringInput | null,
    and?: Array<ModelUserConditionInput | null> | null,
    or?: Array<ModelUserConditionInput | null> | null,
    not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
    ne?: string | null,
    eq?: string | null,
    le?: string | null,
    lt?: string | null,
    ge?: string | null,
    gt?: string | null,
    contains?: string | null,
    notContains?: string | null,
    between?: Array<string | null> | null,
    beginsWith?: string | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
    size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null",
}


export type ModelSizeInput = {
    ne?: number | null,
    eq?: number | null,
    le?: number | null,
    lt?: number | null,
    ge?: number | null,
    gt?: number | null,
    between?: Array<number | null> | null,
};

export type UpdateUserInput = {
    id: string,
    cognito_username?: string | null,
    email?: string | null,
    role?: string | null,
};

export type DeleteUserInput = {
    id?: string | null,
};

export type CreateStudentInput = {
    id?: string | null,
    userId: string,
    name: string,
    english_name: string,
    phone_number: string,
    address: string,
    state: string,
};

export type ModelStudentConditionInput = {
    userId?: ModelIDInput | null,
    name?: ModelStringInput | null,
    english_name?: ModelStringInput | null,
    phone_number?: ModelStringInput | null,
    address?: ModelStringInput | null,
    state?: ModelStringInput | null,
    and?: Array<ModelStudentConditionInput | null> | null,
    or?: Array<ModelStudentConditionInput | null> | null,
    not?: ModelStudentConditionInput | null,
};

export type ModelIDInput = {
    ne?: string | null,
    eq?: string | null,
    le?: string | null,
    lt?: string | null,
    ge?: string | null,
    gt?: string | null,
    contains?: string | null,
    notContains?: string | null,
    between?: Array<string | null> | null,
    beginsWith?: string | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
    size?: ModelSizeInput | null,
};

export type UpdateStudentInput = {
    id: string,
    userId?: string | null,
    name?: string | null,
    english_name?: string | null,
    phone_number?: string | null,
    address?: string | null,
    state?: string | null,
};

export type DeleteStudentInput = {
    id?: string | null,
};

export type CreateStudentAvailableDayInput = {
    id?: string | null,
    studentId: string,
    day: number,
    start_at: number,
    end_at: number,
};

export type ModelStudentAvailableDayConditionInput = {
    studentId?: ModelIDInput | null,
    day?: ModelIntInput | null,
    start_at?: ModelIntInput | null,
    end_at?: ModelIntInput | null,
    and?: Array<ModelStudentAvailableDayConditionInput | null> | null,
    or?: Array<ModelStudentAvailableDayConditionInput | null> | null,
    not?: ModelStudentAvailableDayConditionInput | null,
};

export type ModelIntInput = {
    ne?: number | null,
    eq?: number | null,
    le?: number | null,
    lt?: number | null,
    ge?: number | null,
    gt?: number | null,
    between?: Array<number | null> | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
};

export type UpdateStudentAvailableDayInput = {
    id: string,
    studentId?: string | null,
    day?: number | null,
    start_at?: number | null,
    end_at?: number | null,
};

export type DeleteStudentAvailableDayInput = {
    id?: string | null,
};

export type CreateTeacherInput = {
    id?: string | null,
    userId: string,
    name: string,
    english_name: string,
    phone_number: string,
    address: string,
    biography?: string | null,
    nationality: string,
    meeting_url?: string | null,
};

export type ModelTeacherConditionInput = {
    userId?: ModelIDInput | null,
    name?: ModelStringInput | null,
    english_name?: ModelStringInput | null,
    phone_number?: ModelStringInput | null,
    address?: ModelStringInput | null,
    biography?: ModelStringInput | null,
    nationality?: ModelStringInput | null,
    meeting_url?: ModelStringInput | null,
    and?: Array<ModelTeacherConditionInput | null> | null,
    or?: Array<ModelTeacherConditionInput | null> | null,
    not?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherInput = {
    id: string,
    userId?: string | null,
    name?: string | null,
    english_name?: string | null,
    phone_number?: string | null,
    address?: string | null,
    biography?: string | null,
    nationality?: string | null,
    meeting_url?: string | null,
};

export type DeleteTeacherInput = {
    id?: string | null,
};

export type CreateTeacherAvailableDayInput = {
    id?: string | null,
    teacherId: string,
    day: number,
    start_at: number,
    end_at: number,
};

export type ModelTeacherAvailableDayConditionInput = {
    teacherId?: ModelIDInput | null,
    day?: ModelIntInput | null,
    start_at?: ModelIntInput | null,
    end_at?: ModelIntInput | null,
    and?: Array<ModelTeacherAvailableDayConditionInput | null> | null,
    or?: Array<ModelTeacherAvailableDayConditionInput | null> | null,
    not?: ModelTeacherAvailableDayConditionInput | null,
};

export type UpdateTeacherAvailableDayInput = {
    id: string,
    teacherId?: string | null,
    day?: number | null,
    start_at?: number | null,
    end_at?: number | null,
};

export type DeleteTeacherAvailableDayInput = {
    id?: string | null,
};

export type CreateLessonPlanInput = {
    id?: string | null,
    studentId: string,
    teacherId: string,
    planId: string,
    lesson_day: string,
};

export type ModelLessonPlanConditionInput = {
    studentId?: ModelIDInput | null,
    teacherId?: ModelIDInput | null,
    planId?: ModelIDInput | null,
    lesson_day?: ModelStringInput | null,
    and?: Array<ModelLessonPlanConditionInput | null> | null,
    or?: Array<ModelLessonPlanConditionInput | null> | null,
    not?: ModelLessonPlanConditionInput | null,
};

export type UpdateLessonPlanInput = {
    id: string,
    studentId?: string | null,
    teacherId?: string | null,
    planId?: string | null,
    lesson_day?: string | null,
};

export type DeleteLessonPlanInput = {
    id?: string | null,
};

export type CreateLessonInput = {
    id?: string | null,
    studentId: string,
    teacherId: string,
    description?: string | null,
    meeting_url?: string | null,
    start_time: string,
    end_time: string,
};

export type ModelLessonConditionInput = {
    studentId?: ModelIDInput | null,
    teacherId?: ModelIDInput | null,
    description?: ModelStringInput | null,
    meeting_url?: ModelStringInput | null,
    start_time?: ModelStringInput | null,
    end_time?: ModelStringInput | null,
    and?: Array<ModelLessonConditionInput | null> | null,
    or?: Array<ModelLessonConditionInput | null> | null,
    not?: ModelLessonConditionInput | null,
};

export type UpdateLessonInput = {
    id: string,
    studentId?: string | null,
    teacherId?: string | null,
    description?: string | null,
    meeting_url?: string | null,
    start_time?: string | null,
    end_time?: string | null,
};

export type DeleteLessonInput = {
    id?: string | null,
};

export type CreateActivityInput = {
    id?: string | null,
    title: string,
    author: string,
    address: string,
    url: string,
    start_at: string,
    end_at: string,
    description: string,
};

export type ModelActivityConditionInput = {
    title?: ModelStringInput | null,
    author?: ModelStringInput | null,
    address?: ModelStringInput | null,
    url?: ModelStringInput | null,
    start_at?: ModelStringInput | null,
    end_at?: ModelStringInput | null,
    description?: ModelStringInput | null,
    and?: Array<ModelActivityConditionInput | null> | null,
    or?: Array<ModelActivityConditionInput | null> | null,
    not?: ModelActivityConditionInput | null,
};

export type UpdateActivityInput = {
    id: string,
    title?: string | null,
    author?: string | null,
    address?: string | null,
    url?: string | null,
    start_at?: string | null,
    end_at?: string | null,
    description?: string | null,
};

export type DeleteActivityInput = {
    id?: string | null,
};

export type CreateLessonFeedbackInput = {
    id?: string | null,
    lessonId: string,
    from: string,
    to: string,
    satification: number,
    message?: string | null,
};

export type ModelLessonFeedbackConditionInput = {
    lessonId?: ModelIDInput | null,
    from?: ModelIDInput | null,
    to?: ModelIDInput | null,
    satification?: ModelIntInput | null,
    message?: ModelStringInput | null,
    and?: Array<ModelLessonFeedbackConditionInput | null> | null,
    or?: Array<ModelLessonFeedbackConditionInput | null> | null,
    not?: ModelLessonFeedbackConditionInput | null,
};

export type UpdateLessonFeedbackInput = {
    id: string,
    lessonId?: string | null,
    from?: string | null,
    to?: string | null,
    satification?: number | null,
    message?: string | null,
};

export type DeleteLessonFeedbackInput = {
    id?: string | null,
};

export type CreateNoteInput = {
    id?: string | null,
    lessonId: string,
    authorId: string,
    text: string,
};

export type ModelNoteConditionInput = {
    lessonId?: ModelIDInput | null,
    authorId?: ModelIDInput | null,
    text?: ModelStringInput | null,
    and?: Array<ModelNoteConditionInput | null> | null,
    or?: Array<ModelNoteConditionInput | null> | null,
    not?: ModelNoteConditionInput | null,
};

export type UpdateNoteInput = {
    id: string,
    lessonId?: string | null,
    authorId?: string | null,
    text?: string | null,
};

export type DeleteNoteInput = {
    id?: string | null,
};

export type CreatePlanInput = {
    id?: string | null,
    title: string,
    price: number,
    term: string,
    message: string,
};

export type ModelPlanConditionInput = {
    title?: ModelStringInput | null,
    price?: ModelIntInput | null,
    term?: ModelStringInput | null,
    message?: ModelStringInput | null,
    and?: Array<ModelPlanConditionInput | null> | null,
    or?: Array<ModelPlanConditionInput | null> | null,
    not?: ModelPlanConditionInput | null,
};

export type UpdatePlanInput = {
    id: string,
    title?: string | null,
    price?: number | null,
    term?: string | null,
    message?: string | null,
};

export type DeletePlanInput = {
    id?: string | null,
};

export type ModelUserFilterInput = {
    id?: ModelIDInput | null,
    cognito_username?: ModelStringInput | null,
    email?: ModelStringInput | null,
    role?: ModelStringInput | null,
    and?: Array<ModelUserFilterInput | null> | null,
    or?: Array<ModelUserFilterInput | null> | null,
    not?: ModelUserFilterInput | null,
};

export type ModelStudentFilterInput = {
    id?: ModelIDInput | null,
    userId?: ModelIDInput | null,
    name?: ModelStringInput | null,
    english_name?: ModelStringInput | null,
    phone_number?: ModelStringInput | null,
    address?: ModelStringInput | null,
    state?: ModelStringInput | null,
    and?: Array<ModelStudentFilterInput | null> | null,
    or?: Array<ModelStudentFilterInput | null> | null,
    not?: ModelStudentFilterInput | null,
};

export type ModelStudentAvailableDayFilterInput = {
    id?: ModelIDInput | null,
    studentId?: ModelIDInput | null,
    day?: ModelIntInput | null,
    start_at?: ModelIntInput | null,
    end_at?: ModelIntInput | null,
    and?: Array<ModelStudentAvailableDayFilterInput | null> | null,
    or?: Array<ModelStudentAvailableDayFilterInput | null> | null,
    not?: ModelStudentAvailableDayFilterInput | null,
};

export type ModelTeacherFilterInput = {
    id?: ModelIDInput | null,
    userId?: ModelIDInput | null,
    name?: ModelStringInput | null,
    english_name?: ModelStringInput | null,
    phone_number?: ModelStringInput | null,
    address?: ModelStringInput | null,
    biography?: ModelStringInput | null,
    nationality?: ModelStringInput | null,
    meeting_url?: ModelStringInput | null,
    and?: Array<ModelTeacherFilterInput | null> | null,
    or?: Array<ModelTeacherFilterInput | null> | null,
    not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherAvailableDayFilterInput = {
    id?: ModelIDInput | null,
    teacherId?: ModelIDInput | null,
    day?: ModelIntInput | null,
    start_at?: ModelIntInput | null,
    end_at?: ModelIntInput | null,
    and?: Array<ModelTeacherAvailableDayFilterInput | null> | null,
    or?: Array<ModelTeacherAvailableDayFilterInput | null> | null,
    not?: ModelTeacherAvailableDayFilterInput | null,
};

export type ModelLessonPlanFilterInput = {
    id?: ModelIDInput | null,
    studentId?: ModelIDInput | null,
    teacherId?: ModelIDInput | null,
    planId?: ModelIDInput | null,
    lesson_day?: ModelStringInput | null,
    and?: Array<ModelLessonPlanFilterInput | null> | null,
    or?: Array<ModelLessonPlanFilterInput | null> | null,
    not?: ModelLessonPlanFilterInput | null,
};

export type ModelLessonFilterInput = {
    id?: ModelIDInput | null,
    studentId?: ModelIDInput | null,
    teacherId?: ModelIDInput | null,
    description?: ModelStringInput | null,
    meeting_url?: ModelStringInput | null,
    start_time?: ModelStringInput | null,
    end_time?: ModelStringInput | null,
    and?: Array<ModelLessonFilterInput | null> | null,
    or?: Array<ModelLessonFilterInput | null> | null,
    not?: ModelLessonFilterInput | null,
};

export type ModelActivityFilterInput = {
    id?: ModelIDInput | null,
    title?: ModelStringInput | null,
    author?: ModelStringInput | null,
    address?: ModelStringInput | null,
    url?: ModelStringInput | null,
    start_at?: ModelStringInput | null,
    end_at?: ModelStringInput | null,
    description?: ModelStringInput | null,
    and?: Array<ModelActivityFilterInput | null> | null,
    or?: Array<ModelActivityFilterInput | null> | null,
    not?: ModelActivityFilterInput | null,
};

export type ModelLessonFeedbackFilterInput = {
    id?: ModelIDInput | null,
    lessonId?: ModelIDInput | null,
    from?: ModelIDInput | null,
    to?: ModelIDInput | null,
    satification?: ModelIntInput | null,
    message?: ModelStringInput | null,
    and?: Array<ModelLessonFeedbackFilterInput | null> | null,
    or?: Array<ModelLessonFeedbackFilterInput | null> | null,
    not?: ModelLessonFeedbackFilterInput | null,
};

export type ModelNoteFilterInput = {
    id?: ModelIDInput | null,
    lessonId?: ModelIDInput | null,
    authorId?: ModelIDInput | null,
    text?: ModelStringInput | null,
    and?: Array<ModelNoteFilterInput | null> | null,
    or?: Array<ModelNoteFilterInput | null> | null,
    not?: ModelNoteFilterInput | null,
};

export type ModelPlanFilterInput = {
    id?: ModelIDInput | null,
    title?: ModelStringInput | null,
    price?: ModelIntInput | null,
    term?: ModelStringInput | null,
    message?: ModelStringInput | null,
    and?: Array<ModelPlanFilterInput | null> | null,
    or?: Array<ModelPlanFilterInput | null> | null,
    not?: ModelPlanFilterInput | null,
};

export type CreateUserMutationVariables = {
    input: CreateUserInput,
    condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
    createUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateUserMutationVariables = {
    input: UpdateUserInput,
    condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
    updateUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteUserMutationVariables = {
    input: DeleteUserInput,
    condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
    deleteUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateStudentMutationVariables = {
    input: CreateStudentInput,
    condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
    createStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateStudentMutationVariables = {
    input: UpdateStudentInput,
    condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
    updateStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteStudentMutationVariables = {
    input: DeleteStudentInput,
    condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
    deleteStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateStudentAvailableDayMutationVariables = {
    input: CreateStudentAvailableDayInput,
    condition?: ModelStudentAvailableDayConditionInput | null,
};

export type CreateStudentAvailableDayMutation = {
    createStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateStudentAvailableDayMutationVariables = {
    input: UpdateStudentAvailableDayInput,
    condition?: ModelStudentAvailableDayConditionInput | null,
};

export type UpdateStudentAvailableDayMutation = {
    updateStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteStudentAvailableDayMutationVariables = {
    input: DeleteStudentAvailableDayInput,
    condition?: ModelStudentAvailableDayConditionInput | null,
};

export type DeleteStudentAvailableDayMutation = {
    deleteStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateTeacherMutationVariables = {
    input: CreateTeacherInput,
    condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
    createTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateTeacherMutationVariables = {
    input: UpdateTeacherInput,
    condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
    updateTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteTeacherMutationVariables = {
    input: DeleteTeacherInput,
    condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
    deleteTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateTeacherAvailableDayMutationVariables = {
    input: CreateTeacherAvailableDayInput,
    condition?: ModelTeacherAvailableDayConditionInput | null,
};

export type CreateTeacherAvailableDayMutation = {
    createTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateTeacherAvailableDayMutationVariables = {
    input: UpdateTeacherAvailableDayInput,
    condition?: ModelTeacherAvailableDayConditionInput | null,
};

export type UpdateTeacherAvailableDayMutation = {
    updateTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteTeacherAvailableDayMutationVariables = {
    input: DeleteTeacherAvailableDayInput,
    condition?: ModelTeacherAvailableDayConditionInput | null,
};

export type DeleteTeacherAvailableDayMutation = {
    deleteTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateLessonPlanMutationVariables = {
    input: CreateLessonPlanInput,
    condition?: ModelLessonPlanConditionInput | null,
};

export type CreateLessonPlanMutation = {
    createLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateLessonPlanMutationVariables = {
    input: UpdateLessonPlanInput,
    condition?: ModelLessonPlanConditionInput | null,
};

export type UpdateLessonPlanMutation = {
    updateLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteLessonPlanMutationVariables = {
    input: DeleteLessonPlanInput,
    condition?: ModelLessonPlanConditionInput | null,
};

export type DeleteLessonPlanMutation = {
    deleteLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateLessonMutationVariables = {
    input: CreateLessonInput,
    condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
    createLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateLessonMutationVariables = {
    input: UpdateLessonInput,
    condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
    updateLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteLessonMutationVariables = {
    input: DeleteLessonInput,
    condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
    deleteLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateActivityMutationVariables = {
    input: CreateActivityInput,
    condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
    createActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateActivityMutationVariables = {
    input: UpdateActivityInput,
    condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
    updateActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteActivityMutationVariables = {
    input: DeleteActivityInput,
    condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
    deleteActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateLessonFeedbackMutationVariables = {
    input: CreateLessonFeedbackInput,
    condition?: ModelLessonFeedbackConditionInput | null,
};

export type CreateLessonFeedbackMutation = {
    createLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateLessonFeedbackMutationVariables = {
    input: UpdateLessonFeedbackInput,
    condition?: ModelLessonFeedbackConditionInput | null,
};

export type UpdateLessonFeedbackMutation = {
    updateLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteLessonFeedbackMutationVariables = {
    input: DeleteLessonFeedbackInput,
    condition?: ModelLessonFeedbackConditionInput | null,
};

export type DeleteLessonFeedbackMutation = {
    deleteLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreateNoteMutationVariables = {
    input: CreateNoteInput,
    condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
    createNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateNoteMutationVariables = {
    input: UpdateNoteInput,
    condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
    updateNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteNoteMutationVariables = {
    input: DeleteNoteInput,
    condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
    deleteNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type CreatePlanMutationVariables = {
    input: CreatePlanInput,
    condition?: ModelPlanConditionInput | null,
};

export type CreatePlanMutation = {
    createPlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdatePlanMutationVariables = {
    input: UpdatePlanInput,
    condition?: ModelPlanConditionInput | null,
};

export type UpdatePlanMutation = {
    updatePlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeletePlanMutationVariables = {
    input: DeletePlanInput,
    condition?: ModelPlanConditionInput | null,
};

export type DeletePlanMutation = {
    deletePlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type GetUserQueryVariables = {
    id: string,
};

export type GetUserQuery = {
    getUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListUsersQueryVariables = {
    filter?: ModelUserFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListUsersQuery = {
    listUsers: {
        __typename: "ModelUserConnection",
        items: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetStudentQueryVariables = {
    id: string,
};

export type GetStudentQuery = {
    getStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListStudentsQueryVariables = {
    filter?: ModelStudentFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListStudentsQuery = {
    listStudents: {
        __typename: "ModelStudentConnection",
        items: Array<{
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetStudentAvailableDayQueryVariables = {
    id: string,
};

export type GetStudentAvailableDayQuery = {
    getStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListStudentAvailableDaysQueryVariables = {
    filter?: ModelStudentAvailableDayFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListStudentAvailableDaysQuery = {
    listStudentAvailableDays: {
        __typename: "ModelStudentAvailableDayConnection",
        items: Array<{
            __typename: "StudentAvailableDay",
            id: string,
            studentId: string,
            student: {
                __typename: "Student",
                id: string,
                userId: string,
                name: string,
                english_name: string,
                phone_number: string,
                address: string,
                state: string,
                createdAt: string,
                updatedAt: string,
            },
            day: number,
            start_at: number,
            end_at: number,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetTeacherQueryVariables = {
    id: string,
};

export type GetTeacherQuery = {
    getTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListTeachersQueryVariables = {
    filter?: ModelTeacherFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListTeachersQuery = {
    listTeachers: {
        __typename: "ModelTeacherConnection",
        items: Array<{
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetTeacherAvailableDayQueryVariables = {
    id: string,
};

export type GetTeacherAvailableDayQuery = {
    getTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListTeacherAvailableDaysQueryVariables = {
    filter?: ModelTeacherAvailableDayFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListTeacherAvailableDaysQuery = {
    listTeacherAvailableDays: {
        __typename: "ModelTeacherAvailableDayConnection",
        items: Array<{
            __typename: "TeacherAvailableDay",
            id: string,
            teacherId: string,
            teacher: {
                __typename: "Teacher",
                id: string,
                userId: string,
                name: string,
                english_name: string,
                phone_number: string,
                address: string,
                biography: string | null,
                nationality: string,
                meeting_url: string | null,
                createdAt: string,
                updatedAt: string,
            },
            day: number,
            start_at: number,
            end_at: number,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetLessonPlanQueryVariables = {
    id: string,
};

export type GetLessonPlanQuery = {
    getLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListLessonPlansQueryVariables = {
    filter?: ModelLessonPlanFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListLessonPlansQuery = {
    listLessonPlans: {
        __typename: "ModelLessonPlanConnection",
        items: Array<{
            __typename: "LessonPlan",
            id: string,
            studentId: string,
            student: {
                __typename: "Student",
                id: string,
                userId: string,
                name: string,
                english_name: string,
                phone_number: string,
                address: string,
                state: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "Teacher",
                id: string,
                userId: string,
                name: string,
                english_name: string,
                phone_number: string,
                address: string,
                biography: string | null,
                nationality: string,
                meeting_url: string | null,
                createdAt: string,
                updatedAt: string,
            },
            planId: string,
            plan: {
                __typename: "Plan",
                id: string,
                title: string,
                price: number,
                term: string,
                message: string,
                createdAt: string,
                updatedAt: string,
            },
            lesson_day: string,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetLessonQueryVariables = {
    id: string,
};

export type GetLessonQuery = {
    getLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListLessonsQueryVariables = {
    filter?: ModelLessonFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListLessonsQuery = {
    listLessons: {
        __typename: "ModelLessonConnection",
        items: Array<{
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetActivityQueryVariables = {
    id: string,
};

export type GetActivityQuery = {
    getActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListActivitysQueryVariables = {
    filter?: ModelActivityFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListActivitysQuery = {
    listActivitys: {
        __typename: "ModelActivityConnection",
        items: Array<{
            __typename: "Activity",
            id: string,
            title: string,
            author: string,
            participants: Array<{
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            } | null>,
            address: string,
            url: string,
            start_at: string,
            end_at: string,
            description: string,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetLessonFeedbackQueryVariables = {
    id: string,
};

export type GetLessonFeedbackQuery = {
    getLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListLessonFeedbacksQueryVariables = {
    filter?: ModelLessonFeedbackFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListLessonFeedbacksQuery = {
    listLessonFeedbacks: {
        __typename: "ModelLessonFeedbackConnection",
        items: Array<{
            __typename: "LessonFeedback",
            id: string,
            lessonId: string,
            lesson: {
                __typename: "Lesson",
                id: string,
                studentId: string,
                teacherId: string,
                description: string | null,
                meeting_url: string | null,
                start_time: string,
                end_time: string,
                createdAt: string,
                updatedAt: string,
            },
            from: string,
            fromUser: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            to: string,
            toUser: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            satification: number,
            message: string | null,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetNoteQueryVariables = {
    id: string,
};

export type GetNoteQuery = {
    getNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListNotesQueryVariables = {
    filter?: ModelNoteFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListNotesQuery = {
    listNotes: {
        __typename: "ModelNoteConnection",
        items: Array<{
            __typename: "Note",
            id: string,
            lessonId: string,
            lesson: {
                __typename: "Lesson",
                id: string,
                studentId: string,
                teacherId: string,
                description: string | null,
                meeting_url: string | null,
                start_time: string,
                end_time: string,
                createdAt: string,
                updatedAt: string,
            },
            authorId: string,
            author: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            text: string,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type GetPlanQueryVariables = {
    id: string,
};

export type GetPlanQuery = {
    getPlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListPlansQueryVariables = {
    filter?: ModelPlanFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListPlansQuery = {
    listPlans: {
        __typename: "ModelPlanConnection",
        items: Array<{
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};

export type OnCreateUserSubscription = {
    onCreateUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateUserSubscription = {
    onUpdateUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteUserSubscription = {
    onDeleteUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateStudentSubscription = {
    onCreateStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateStudentSubscription = {
    onUpdateStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteStudentSubscription = {
    onDeleteStudent: {
        __typename: "Student",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        state: string,
        available_days: {
            __typename: "ModelStudentAvailableDayConnection",
            items: Array<{
                __typename: "StudentAvailableDay",
                id: string,
                studentId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateStudentAvailableDaySubscription = {
    onCreateStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateStudentAvailableDaySubscription = {
    onUpdateStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteStudentAvailableDaySubscription = {
    onDeleteStudentAvailableDay: {
        __typename: "StudentAvailableDay",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateTeacherSubscription = {
    onCreateTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateTeacherSubscription = {
    onUpdateTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteTeacherSubscription = {
    onDeleteTeacher: {
        __typename: "Teacher",
        id: string,
        userId: string,
        user: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        name: string,
        english_name: string,
        phone_number: string,
        address: string,
        available_days: {
            __typename: "ModelTeacherAvailableDayConnection",
            items: Array<{
                __typename: "TeacherAvailableDay",
                id: string,
                teacherId: string,
                day: number,
                start_at: number,
                end_at: number,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        biography: string | null,
        nationality: string,
        meeting_url: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateTeacherAvailableDaySubscription = {
    onCreateTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateTeacherAvailableDaySubscription = {
    onUpdateTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteTeacherAvailableDaySubscription = {
    onDeleteTeacherAvailableDay: {
        __typename: "TeacherAvailableDay",
        id: string,
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        day: number,
        start_at: number,
        end_at: number,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateLessonPlanSubscription = {
    onCreateLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateLessonPlanSubscription = {
    onUpdateLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteLessonPlanSubscription = {
    onDeleteLessonPlan: {
        __typename: "LessonPlan",
        id: string,
        studentId: string,
        student: {
            __typename: "Student",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            state: string,
            available_days: {
                __typename: "ModelStudentAvailableDayConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "Teacher",
            id: string,
            userId: string,
            user: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            name: string,
            english_name: string,
            phone_number: string,
            address: string,
            available_days: {
                __typename: "ModelTeacherAvailableDayConnection",
                nextToken: string | null,
            } | null,
            biography: string | null,
            nationality: string,
            meeting_url: string | null,
            createdAt: string,
            updatedAt: string,
        },
        planId: string,
        plan: {
            __typename: "Plan",
            id: string,
            title: string,
            price: number,
            term: string,
            message: string,
            createdAt: string,
            updatedAt: string,
        },
        lesson_day: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateLessonSubscription = {
    onCreateLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateLessonSubscription = {
    onUpdateLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteLessonSubscription = {
    onDeleteLesson: {
        __typename: "Lesson",
        id: string,
        studentId: string,
        student: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        teacherId: string,
        teacher: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        description: string | null,
        meeting_url: string | null,
        start_time: string,
        end_time: string,
        feedbacks: {
            __typename: "ModelLessonFeedbackConnection",
            items: Array<{
                __typename: "LessonFeedback",
                id: string,
                lessonId: string,
                from: string,
                to: string,
                satification: number,
                message: string | null,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        notes: {
            __typename: "ModelNoteConnection",
            items: Array<{
                __typename: "Note",
                id: string,
                lessonId: string,
                authorId: string,
                text: string,
                createdAt: string,
                updatedAt: string,
            } | null> | null,
            nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateActivitySubscription = {
    onCreateActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateActivitySubscription = {
    onUpdateActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteActivitySubscription = {
    onDeleteActivity: {
        __typename: "Activity",
        id: string,
        title: string,
        author: string,
        participants: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null>,
        address: string,
        url: string,
        start_at: string,
        end_at: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateLessonFeedbackSubscription = {
    onCreateLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateLessonFeedbackSubscription = {
    onUpdateLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteLessonFeedbackSubscription = {
    onDeleteLessonFeedback: {
        __typename: "LessonFeedback",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        from: string,
        fromUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        to: string,
        toUser: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        satification: number,
        message: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreateNoteSubscription = {
    onCreateNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdateNoteSubscription = {
    onUpdateNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeleteNoteSubscription = {
    onDeleteNote: {
        __typename: "Note",
        id: string,
        lessonId: string,
        lesson: {
            __typename: "Lesson",
            id: string,
            studentId: string,
            student: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            teacherId: string,
            teacher: {
                __typename: "User",
                id: string,
                cognito_username: string,
                email: string,
                role: string,
                createdAt: string,
                updatedAt: string,
            },
            description: string | null,
            meeting_url: string | null,
            start_time: string,
            end_time: string,
            feedbacks: {
                __typename: "ModelLessonFeedbackConnection",
                nextToken: string | null,
            } | null,
            notes: {
                __typename: "ModelNoteConnection",
                nextToken: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
        },
        authorId: string,
        author: {
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        },
        text: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnCreatePlanSubscription = {
    onCreatePlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnUpdatePlanSubscription = {
    onUpdatePlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type OnDeletePlanSubscription = {
    onDeletePlan: {
        __typename: "Plan",
        id: string,
        title: string,
        price: number,
        term: string,
        message: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};
