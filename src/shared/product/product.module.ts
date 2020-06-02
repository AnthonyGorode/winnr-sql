import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
    exports: [TypeOrmModule]
})
export class ProductModule {}
