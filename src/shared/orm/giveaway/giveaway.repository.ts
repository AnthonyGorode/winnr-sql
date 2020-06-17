import { EntityRepository, Repository } from "typeorm";
import { Giveaway } from "./giveaway.entity";

@EntityRepository(Giveaway)
export class GiveawayRepository extends Repository<Giveaway> {

    getAllCurrentGiveawayProduct(): Promise<Giveaway[]> {
        return this
                .createQueryBuilder('g')
                .innerJoinAndMapMany(
                    'g.product',
                    'product',
                    'p',
                    'p.id_product = g.id_product'
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
                .leftJoinAndMapMany(
                    'p.productRequirement',
                    'product_requirement',
                    'pr',
                    'p.id_product = pr.id_product'
                )
                .leftJoinAndMapMany(
                    'pr.requirement',
                    'requirement',
                    'r',
                    'pr.id_requirement = r.id_requirement'
                )
                .where('g.ended_giveaway = 0')
                .getMany();
    }

}