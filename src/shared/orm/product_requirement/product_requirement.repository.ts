import { EntityRepository, Repository } from "typeorm";
import { ProductRequirement } from "./product_requirement.entity";

@EntityRepository(ProductRequirement)
export class ProductRequirementRepository extends Repository<ProductRequirement> {

}