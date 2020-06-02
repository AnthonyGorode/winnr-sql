/* eslint-disable @typescript-eslint/camelcase */
import { Product } from '../entities/product.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    findByName(nameProduct: string): Promise<Product> {
        return this.findOne({name_product: nameProduct});
    }

}