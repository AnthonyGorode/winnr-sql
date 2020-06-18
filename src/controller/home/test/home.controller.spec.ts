import { SharedModule } from './../../../shared/shared.module';
import { HomeService } from './../home.service';
import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from '../home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './../../../config/config.service';

describe('Home Controller', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [HomeService],
      imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),SharedModule],
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
