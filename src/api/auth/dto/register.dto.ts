// auth.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, IsOptional, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'First Name is required' })
  @ApiProperty()
  @Matches(/^[a-zA-Z ]+$/, {
    message: 'Invalid First Name. Only alphabets are allowed.',
  })
  first_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Last Name is required' })
  @ApiProperty()
  @Matches(/^[a-zA-Z ]+$/, {
    message: 'Invalid Last Name. Only alphabets are allowed.',
  })
  last_name: string;

  @IsEmail({}, { message: 'Invalid Email' })
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty()
  email: string;

  // @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  @ApiProperty()
  password: string;


  @IsOptional()
  @ApiProperty({ type: Date })
  date_of_birth?: Date;

  @IsOptional()
  @ApiProperty()
  gender?: string;

  @IsOptional()
  @ApiProperty()
  address?: string;

  @IsOptional()
  @ApiProperty()
  zip_code?: string;

  @IsOptional()
  @ApiProperty()
  city?: string;

  @IsOptional()
  @ApiProperty()
  is_active?: boolean;

  @IsOptional()
  @ApiProperty()
  state?: string;

  @IsOptional()
  @ApiProperty({ type: () => 'bigint' })
  role?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty()
  tenant_id: bigint;

  @ApiProperty({ type: () => 'bigint' })
  created_by?: bigint;
}
