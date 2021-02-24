import * as api from './API';
import { DeepOmit } from './PrimitiveTypes';

export type User = DeepOmit<Exclude<api.GetUserQuery['getUser'], null>, '__typename'>;
export type Student = DeepOmit<Exclude<api.GetStudentQuery['getStudent'], null>, '_typename'>;
export type Teacher = DeepOmit<Exclude<api.GetTeacherQuery['getTeacher'], null>, '_typename'>;
