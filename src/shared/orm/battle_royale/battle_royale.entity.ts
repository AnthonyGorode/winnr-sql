import { Product } from './../product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Winch } from "../winch/winch.entity";
import { UserBattleRoyale } from '../user_battle_royale/user_battle_royale.entity';

@Entity()
export class BattleRoyale {

    @PrimaryGeneratedColumn()
    id_battle_royale: number;

    @ManyToOne(() => Winch, winch => winch.battleRoyale)
    @JoinColumn({ name: 'id_winch' })
    winch: Winch;
    
    @ManyToOne(() => Product, product => product.battleRoyales)
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @OneToMany(() => UserBattleRoyale, userBattleRoyale => userBattleRoyale.battleRoyale)
    usersPlayed: UserBattleRoyale[];

    @Column({ type: 'datetime' })
    started_at: string;

    @Column({ type: 'datetime' })
    ended_at: string;

    @Column("tinyint")
    ended_battle_royale: number;

    @Column("tinyint")
    discount_valid: number;

    @Column("tinyint")
    winner_buy_product: number;   

}