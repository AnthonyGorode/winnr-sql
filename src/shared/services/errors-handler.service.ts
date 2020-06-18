import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

Injectable()
export class ErrorHandlerService {

    /**
     * Throw a 5OO internal server error
     *
     * @param {string} message error description
     * @memberof ErrorHandlerService
     */
    public internalError(message: string): void {
        throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}