import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';

import { Product } from './../shared/product/product.entity';
import { ProductRepository } from './../shared/product/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    Product,
    ProductRepository
  ])],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
