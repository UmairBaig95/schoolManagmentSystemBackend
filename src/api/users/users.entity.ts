import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { RoleEnum } from "./user.enum";
import { Tenant } from "../tenant/tenant.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: bigint;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  date_of_birth?: Date;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  zip_code?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ type: "boolean", default: false })
  is_archived: boolean;

  @Column({ nullable: true })
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ nullable: true })
  mobile_number: string;

  @Column({
    type: "enum",
    enum: RoleEnum,
    default: RoleEnum.ADMIN,
  })
  role: RoleEnum;

  @ManyToOne(() => Tenant, (tenant) => tenant.id, { nullable: false })
  @JoinColumn({ name: "tenant_id" })
  tenant: Tenant;

  @Column({ type: "bigint", nullable: true })
  tenant_id?: bigint;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: "created_by" })
  created_by?: bigint;
}
