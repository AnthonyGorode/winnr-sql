import { EntityRepository, Repository } from "typeorm";
import { Association } from "./association.entity";

@EntityRepository(Association)
export class AssociationRepository extends Repository<Association> {
    
}