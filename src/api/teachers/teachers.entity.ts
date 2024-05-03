import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  firstName: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  lastName: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  phoneNumber: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  address: string;

  @Column({ type: "date", nullable: false })
  dateOfBirth: Date;

  @Column({ type: "text", nullable: true })
  bio: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  qualification: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  subject: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  class: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
