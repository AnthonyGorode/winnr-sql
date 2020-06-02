import { Product } from './../shared/product/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './../shared/product/product.repository';

@Injectable()
export class HomeService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: ProductRepository
    ) {}

    public getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    public getProductByName(): Promise<Product> {
        return this.productRepository.findByName('WITCHER 3 - WILD HUNT');
    }

}
