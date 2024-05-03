import { HttpException } from '@nestjs/common';

export interface AuthenticatedRequest extends Request {
  auth: {
    user: {
      _id: any;
      email: string;
      [key: string]: any;
    };
  };
}
