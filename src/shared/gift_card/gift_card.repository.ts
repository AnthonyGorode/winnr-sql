import { EntityRepository, Repository } from "typeorm";
import { GiftCard } from "./gift_card.entity";

@EntityRepository(GiftCard)
export class GiftCardRepository extends Repository<GiftCard> {

}