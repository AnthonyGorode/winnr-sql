import { EntityRepository, Repository } from "typeorm";
import { Developer } from './developer.entity';

@EntityRepository(Developer)
export class DeveloperRepository extends Repository<Developer> {

}