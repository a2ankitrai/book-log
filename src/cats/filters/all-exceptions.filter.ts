import {
  ArgumentsHost, Catch, ExceptionFilter, HttpException,
  HttpStatus
} from '@nestjs/common';
import { Request, Response } from 'express';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;


    response
      .status(httpStatus)
      .json({
        statusCode: httpStatus,
        timestamp: new Date().toISOString(),
        uniqueCode: 'all trapper',
        path: request.url,
      });

  }
}
