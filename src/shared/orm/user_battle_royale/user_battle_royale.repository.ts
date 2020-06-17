import { EntityRepository, Repository } from "typeorm";
import { UserBattleRoyale } from "./user_battle_royale.entity";

@EntityRepository(UserBattleRoyale)
export class UserBattleRoyaleRepository extends Repository<UserBattleRoyale> {
    
}