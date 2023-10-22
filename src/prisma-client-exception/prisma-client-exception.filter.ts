import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {

    const errorMessage = 'Sorry, something went wrong on our end.';
    const statusCode = 500;
    const errorDescription = exception.message;

    const response = {
      statusCode,
      message: errorMessage,
      error: errorDescription,
    };

    super.catch(response, host);
  }
}
