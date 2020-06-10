import { LoginService } from './login.service';
import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { UserAccountDto } from './dto/user-account.dto';

@Controller('login')
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) {}

    @Post()
    @HttpCode(201)
    public createUserAccount(@Body() userAccountDto: UserAccountDto) {
        return this.loginService.createAccountUser(userAccountDto);
    }

}
