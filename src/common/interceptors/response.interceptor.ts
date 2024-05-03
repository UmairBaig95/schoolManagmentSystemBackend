import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = new ResponseDTO();
        response.success = true;
        response.data = data;
        return response;
      }),
    );
  }
}

class ResponseDTO {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
  status?: number;
}
