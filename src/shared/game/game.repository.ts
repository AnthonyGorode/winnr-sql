import { EntityRepository, Repository } from "typeorm";
import { Game } from "./game.entity";

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
    
    queryAllGamesDetails(): Promise<Game[]> {
        return this
                .createQueryBuilder('g')
                .innerJoinAndMapMany(
                    'g.developer',
                    'developer',
                    'd',
                    'g.id_developer = d.id_developer'
                )
                .innerJoinAndMapMany(
                    'g.product',
                    'product',
                    'p',
                    'p.id_product = g.id_product'
                )
                .innerJoinAndMapMany(
                    'p.productRequirement',
                    'product_requirement',
                    'pr',
                    'p.id_product = pr.id_product'
                )
                .innerJoinAndMapMany(
                    'pr.requirement',
                    'requirement',
                    'r',
                    'r.id_requirement = pr.id_requirement'
                )
                .innerJoinAndMapMany(
                    'p.platform',
                    'platform',
                    'pp',
                    'p.id_platform = pp.id_platform'
                )
                .innerJoinAndMapMany(
                    'p.productTranslation',
                    'product_translation',
                    'pt',
                    'p.id_product = pt.id_product'
                )
                .orderBy('p.id_product')
                .getMany();

    }

}