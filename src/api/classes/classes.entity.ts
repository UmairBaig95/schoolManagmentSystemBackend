import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Teacher } from "../teachers/teachers.entity";
import { Student } from "../students/students.entity";

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  section: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  grade: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.id, { nullable: false })
  @JoinColumn({ name: "teacher_id" })
  teacher: Teacher;

  @ManyToMany(() => Student)
  @JoinTable({
    name: "class_students",
    joinColumn: { name: "class_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "student_id", referencedColumnName: "id" },
  })
  students: Student[];

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
