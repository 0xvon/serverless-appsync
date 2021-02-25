/* tslint:disable */
/* eslint-disable */
import { DeepOmit } from './DeepOmit';

export type User = DeepOmit<Exclude<GetUserQuery['getUser'], null>, '__typename'>;
export type Student = DeepOmit<Exclude<GetStudentQuery['getStudent'], null>, '_typename'>;
export type Teacher = DeepOmit<Exclude<GetTeacherQuery['getTeacher'], null>, '_typename'>;
export type Output<T> = { data: T }

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
