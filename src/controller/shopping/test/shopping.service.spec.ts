import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingController } from './../shopping.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingService } from '../shopping.service';
import { SharedModule } from './../../../shared/shared.module';
import { configService } from './../../../config/config.service';

describe('ShoppingService', () => {
  let service: ShoppingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingService],
      controllers: [ShoppingController],
      imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),SharedModule],
    }).compile();

    service = module.get<ShoppingService>(ShoppingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
