import { Entity, ManyToOne, JoinColumn, Column } from "typeorm";
import { User } from "../user/user.entity";
import { BattleRoyale } from "../battle_royale/battle_royale.entity";

@Entity()
export class UserBattleRoyale {

    @ManyToOne(() => User, user => user.battleRoyalePlayed, {primary: true})
    @JoinColumn({ name: 'id_user' })
    user: User;

    @ManyToOne(() => BattleRoyale, battleRoyale => battleRoyale.usersPlayed, {primary: true})
    @JoinColumn({ name: 'id_battle_royale' })
    battleRoyale: BattleRoyale;

    @Column("int")
    coins_spent: number;

    @Column("int")
    current_position: number;

    @Column({ type: 'datetime' })
    started_at: string;

    @Column("tinyint")
    winner: number;

    @Column("tinyint")
    lose_purchased_product: number;

    @Column("tinyint")
    loser_donate_coins: number;
    
}