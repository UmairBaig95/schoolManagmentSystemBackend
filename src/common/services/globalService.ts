import { HttpException, HttpStatus } from '@nestjs/common';

export const globalService = {
  throwCustomError: (message: string, payload: any, statusCode: number) => {
    const error: any = new Error();
    error.name = 'CUSTOM_ERROR';
    error.message = message;
    error.payload = payload;
    throw new HttpException(error, statusCode, payload);
  },
};
