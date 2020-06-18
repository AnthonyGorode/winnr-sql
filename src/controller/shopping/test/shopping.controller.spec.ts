import { SharedModule } from './../../../shared/shared.module';
import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingController } from '../shopping.controller';
import { ShoppingService } from '../shopping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './../../../config/config.service';

describe('Shopping Controller', () => {
  let controller: ShoppingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingController],
      providers: [ShoppingService],
      imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),SharedModule]
    }).compile();

    controller = module.get<ShoppingController>(ShoppingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
