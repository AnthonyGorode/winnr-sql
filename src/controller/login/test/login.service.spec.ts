import { SharedModule } from './../../../shared/shared.module';
import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from '../login.service';
import { LoginController } from '../login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './../../../config/config.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginService],
      imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),SharedModule],
      controllers: [LoginController]
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
