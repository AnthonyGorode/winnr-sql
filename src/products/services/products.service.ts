/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repository/product.repository';

// const products: ProductModel[] = [
//     {
//         name: 'Witcher 3: Wild Blunt',
//         price: 30.00
//     },
//     {
//         name: 'Grand Theft Auto 5',
//         price: 30.00
//     },
//     {
//         name: 'Tomb Raider',
//         price: 30.00
//     },
//     {
//         name: 'Destiny 2',
//         price: 30.00
//     },
//     {
//         name: 'Red Dead Redemption II',
//         price: 30.00
//     },
//     {
//         name: 'Assassin\'s Creed Valhalla',
//         price: 30.00
//     },
//     {
//         name: 'FIFA 20',
//         price: 30.00
//     },
//     {
//         name: 'The Elder Scroll VI',
//         price: 30.00
//     },
// ];

@Injectable()
export class ProductsService {

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
