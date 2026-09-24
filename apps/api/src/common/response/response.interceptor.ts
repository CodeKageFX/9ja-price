import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const message =
      this.reflector.get<string>('message', context.getHandler()) || 'success';

    return next.handle().pipe(
      map((data) => ({
        statusCode: response.statusCode,
        message,
        data,
      })),
    );
  }
}
