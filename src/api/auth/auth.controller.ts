import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { CreateUserDto } from "./dto/register.dto";

@Controller("api/auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    try {
      return await this.authService.login(loginDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.AMBIGUOUS,
          message: error.message,
        },
        HttpStatus.AMBIGUOUS
      );
    }
  }

  @Post("register")
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const response = await this.authService.registerUser(createUserDto);
      return response;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.AMBIGUOUS,
          message: error.message,
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
