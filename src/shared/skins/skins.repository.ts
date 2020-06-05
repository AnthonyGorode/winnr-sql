import { EntityRepository, Repository } from "typeorm";
import { Skins } from "./skins.entity";

@EntityRepository(Skins)
export class SkinsRepository extends Repository<Skins> {
    
}