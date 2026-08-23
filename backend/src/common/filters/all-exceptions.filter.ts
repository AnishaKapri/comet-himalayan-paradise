import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Response } from 'express';

interface ApiErrorResponse {
  success: false;
  message: string;
  statusCode: number;
}

const INTERNAL_SERVER_ERROR: number = HttpStatus.INTERNAL_SERVER_ERROR;

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusCode: number = exception instanceof HttpException ? exception.getStatus() : INTERNAL_SERVER_ERROR;

    const message = this.extractMessage(exception, statusCode);

    if (statusCode >= INTERNAL_SERVER_ERROR) {
      this.logger.error(exception instanceof Error ? exception.stack : exception);
    }

    const body: ApiErrorResponse = { success: false, message, statusCode };
    response.status(statusCode).json(body);
  }

  private extractMessage(exception: unknown, statusCode: number): string {
    if (exception instanceof HttpException) {
      const response = exception.getResponse();
      if (typeof response === 'string') {
        return response;
      }
      if (typeof response === 'object' && response !== null && 'message' in response) {
        const value = (response as { message: string | string[] }).message;
        return Array.isArray(value) ? value.join(', ') : value;
      }
      return exception.message;
    }
    if (statusCode === INTERNAL_SERVER_ERROR) {
      return 'Internal server error';
    }
    return 'Unexpected error';
  }
}
