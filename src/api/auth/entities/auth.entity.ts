// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  instituteName: string;

  @Column()
  instituteType: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
