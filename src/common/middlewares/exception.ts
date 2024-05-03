import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class Exception implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const exceptionResponse: any = exception.getResponse();
    const message = Array.isArray(exceptionResponse['message'])
      ? exceptionResponse['message']
      : [exceptionResponse['message']];

    const FailedResponse = {
      success: false,
      message: exception.message,
      payload: exceptionResponse.payload,
      stack: exception.stack,
      // statusCode: status,
      // path: request.url,
      // timestamp: moment().format('MMMM Do, h:mm a'),
      // pipes: {
      // message: message,
      // },
    };

    response.status(status).json(FailedResponse);
  }
}
