import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/register.dto";
import { User } from "../users/users.entity";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private entity: Repository<User>,
    private jwtService: JwtService
  ) {}

  async login(
    loginDto: LoginDto
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.entity.findOne({
      where: { email: loginDto.email },
    });
    if (
      user &&
      (await bcrypt.compare(loginDto.password, user.password || ""))
    ) {
      // Generate JWT tokens
      const accessTokenPayload = { email: user.email, sub: user.id };
      const refreshTokenPayload = { email: user.email, sub: user.id };

      const accessToken = this.jwtService.sign(accessTokenPayload);
      const refreshToken = this.jwtService.sign(refreshTokenPayload, {
        expiresIn: "30m",
      }); // Example: refresh token expires in 7 days

      // Return both tokens in the response
      return { accessToken: accessToken, refreshToken: refreshToken };
    }

    // If user not found or password does not match, throw an error
    throw new Error("Invalid email or password");
  }

  async registerUser(registerDto: CreateUserDto): Promise<any> {
    if (!registerDto.email) {
      throw new Error("Email is required");
    }

    if (!registerDto.password) {
      throw new Error("Password is required");
    }

    if (!registerDto.first_name) {
      throw new Error("First name is required");
    }

    if (!registerDto.last_name) {
      throw new Error("Last name is required");
    }

    const existingUser = await this.entity.findOne({
      where: { email: registerDto.email },
    });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const newUser = this.entity.create({
      email: registerDto.email,
      password: hashedPassword,
      first_name: registerDto.first_name,
      last_name: registerDto.last_name,
    });

    try {
      const savedUser = await this.entity.save(newUser);
      return savedUser;
    } catch (error) {
      throw new Error("Failed to register user");
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: LoginDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
