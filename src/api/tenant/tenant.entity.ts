import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../users/users.entity";

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: bigint;

  @Column({ type: "varchar", length: 255, nullable: false })
  tenant_name: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  tenant_domain: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  email: string;

  @Column({ type: "boolean", default: false })
  is_active: boolean;

  @Column({ type: "varchar", length: 60, nullable: false })
  password: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: "created_by" })
  created_by: bigint;
}
