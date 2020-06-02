/* eslint-disable @typescript-eslint/camelcase */
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../product/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    findByName(nameProduct: string): Promise<Product> {
        return this.findOne({name_product: nameProduct});
    }

}