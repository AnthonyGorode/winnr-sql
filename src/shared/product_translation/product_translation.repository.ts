import { EntityRepository, Repository } from "typeorm";
import { ProductTranslation } from "./product_translation.entity";

@EntityRepository(ProductTranslation)
export class ProductTranslationRepository extends Repository<ProductTranslation> {


}