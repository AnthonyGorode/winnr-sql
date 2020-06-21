/* eslint-disable @typescript-eslint/camelcase */
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../product/product.entity';

/**
 * Product Repository
 *
 * @export
 * @class ProductRepository
 * @extends {Repository<Product>}
 */
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  
  /**
   * List of products with their requirements, platform, developer and product type
   *
   * @returns {Promise<Product[]>}
   * @memberof ProductRepository
   */
  queryAllProductsDetails(): Promise<Product[]> {
    return this.createQueryBuilder('p')
        .leftJoinAndMapMany(
            'p.giftCard',
            'gift_card',
            'gc',
            'p.id_product = gc.id_product',
        )
        .leftJoinAndMapMany(
          'p.game',
          'game',
          'g', 
          'p.id_product = g.id_product'
        )
        .leftJoinAndMapMany(
            'g.developer',
            'developer',
            'd',
            'd.id_developer = g.id_developer',
        )
        .innerJoinAndMapMany(
            'p.platform',
            'platform',
            'pp',
            'p.id_platform = pp.id_platform',
        )
        .innerJoinAndMapMany(
            'p.productTranslation',
            'product_translation',
            'pt',
            'p.id_product = pt.id_product',
        )
        .leftJoinAndMapMany(
            'p.productRequirement',
            'product_requirement',
            'pr',
            'p.id_product = pr.id_product',
        )
        .leftJoinAndMapMany(
            'pr.requirement',
            'requirement',
            'r',
            'pr.id_requirement = r.id_requirement',
        )
        .orderBy('p.id_product')
        .getMany();
  }

  /**
   * Return product according to the name
   *
   * @param {string} nameProduct
   * @returns {Promise<Product>}
   * @memberof ProductRepository
   */
  findByName(nameProduct: string): Promise<Product> {
    return this.findOne({ name_product: nameProduct });
  }

  /**
   * List of products with requirements and translations
   *
   * @returns {Promise<Product[]>}
   * @memberof ProductRepository
   */
  findProductsWithRequirementsAndTranslations(): Promise<Product[]> {
    return this.find({
      join: {
        alias: 'product',
        leftJoinAndSelect: {
          productTranslation: 'product.productTranslation',
          productRequirement: 'product.productRequirement',
          requirement: 'productRequirement.requirement',
        },
      },
    });
  }

}
