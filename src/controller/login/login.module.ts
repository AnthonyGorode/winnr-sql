import { SharedModule } from './../../shared/shared.module';
import { LoginController } from './login.controller';
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';

@Module({
  imports: [SharedModule],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
