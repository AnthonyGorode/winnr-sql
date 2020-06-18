import { Test, TestingModule } from '@nestjs/testing';
import { HomeService } from '../home.service';
import { SharedModule } from './../../../shared/shared.module';
import { HomeController } from '../home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './../../../config/config.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeService],
      imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        SharedModule,
      ],
      controllers: [HomeController],
    }).compile();

    service = module.get<HomeService>(HomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return WITCHER III game', async () => {
    const game = await service.getProductByName();

    expect(game.name_product).toBeDefined();
    expect(game.name_product).toBe('WITCHER 3 - WILD HUNt');
  });
});
