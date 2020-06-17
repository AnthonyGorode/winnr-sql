import { EntityRepository, Repository } from "typeorm";
import { UserGiveaway } from "./user_giveaway.entity";

@EntityRepository(UserGiveaway)
export class UserGiveawayRepository extends Repository<UserGiveaway> {

}