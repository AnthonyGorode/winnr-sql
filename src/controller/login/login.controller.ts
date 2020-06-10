import { LoginService } from './login.service';
import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { UserAccountDto } from './dto/user-account.dto';

/**
 * Manage all user requests about the login
 *
 * @export
 * @class LoginController
 */
@Controller('login')
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) {}

    /**
     * Type Post() 
     * Use a service to create a user
     *
     * @param {UserAccountDto} userAccountDto data structure of user account sending in a request
     * @returns the new user created
     * @memberof LoginController
     */
    @Post()
    @HttpCode(201)
    public createUserAccount(@Body() userAccountDto: UserAccountDto) {
        return this.loginService.createAccountUser(userAccountDto);
    }

}
