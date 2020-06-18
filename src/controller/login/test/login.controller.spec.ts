import { SharedModule } from './../../../shared/shared.module';
import { LoginService } from './../login.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from '../login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './../../../config/config.service';

describe('Login Controller', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService],
      imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),SharedModule]
    }).compile();

    controller = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
