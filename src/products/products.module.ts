import { Product } from './entities/product.entity';
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './repository/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
