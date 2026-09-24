import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message =
      this.reflector.get<string>('message', context.getHandler()) || 'success';

    return next.handle().pipe(
      map((data: unknown) => ({
        statusCode: response.statusCode,
        message,
        data,
      })),
    );
  }
}
