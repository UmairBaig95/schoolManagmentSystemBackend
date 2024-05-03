import { Auth } from "src/api/auth/entities/auth.entity";
import { Class } from "src/api/classes/classes.entity";
import { Student } from "src/api/students/students.entity";
import { Teacher } from "src/api/teachers/teachers.entity";
import { Tenant } from "src/api/tenant/tenant.entity";
import { User } from "src/api/users/users.entity";

export const entities = [Auth, User, Tenant, Teacher, Student, Class];
