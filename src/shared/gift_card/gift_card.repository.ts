import { EntityRepository, Repository } from "typeorm";
import { GiftCard } from "./gift_card.entity";

@EntityRepository(GiftCard)
export class GiftCardRepository extends Repository<GiftCard> {

    queryAllGiftCardDetails(): Promise<GiftCard[]> {
        return this
                .createQueryBuilder('gc')
                .innerJoinAndMapMany(
                    'gc.product',
                    'product',
                    'p',
                    'p.id_product = gc.id_product'
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