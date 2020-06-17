import { EntityRepository, Repository } from "typeorm";
import { BattleRoyale } from "./battle_royale.entity";

@EntityRepository(BattleRoyale)
export class BattleRoyaleRepository extends Repository<BattleRoyale> {
    
    getAllCurrentBattleRoyaleProduct(): Promise<BattleRoyale[]> {
        return this
                .createQueryBuilder('br')
                .innerJoinAndMapMany(
                    'br.product',
                    'product',
                    'p',
                    'p.id_product = br.id_product'
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
                .where('br.ended_battle_royale = 0')
                .getMany();
    }

}