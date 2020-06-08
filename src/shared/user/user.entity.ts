import { Order } from './../order/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { UserBattleRoyale } from "../user_battle_royale/user_battle_royale.entity";
import { UserGiveaway } from "../user_giveaway/user_giveaway.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id_user: number;

    @OneToMany(() => User, user => user.sponsoredBy)
    sponsor: User[];

    @ManyToOne(() => User, user => user.sponsor)
    @JoinColumn({ name: 'sponsored_by' })
    sponsoredBy: User;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @OneToMany(() => UserBattleRoyale, userBattleRoyale => userBattleRoyale.user)
    battleRoyalePlayed: UserBattleRoyale[];

    @OneToMany(() => UserGiveaway, userGiveaway => userGiveaway.user)
    giveawayPlayed: UserGiveaway[];

    @Column({ length: 255 })
    name_user: string;

    @Column({ length: 255 })
    email_user: string;

    @Column({ length: 255 })
    photo_user: string;

    @Column({ length: 255 })
    username_user: string;

    @Column({ length: 255 })
    password_user: string;

    @Column('int')
    tickets_user: number;

    @Column('int')
    coins_user: number;

    @Column({ length: 255 })
    status_user: string;

    @Column({ length: 255 })
    rank_user: string;

    @Column({ type: 'datetime' })
    created_at: string;

    @Column({ type: 'datetime' })
    verified_at: string;

    @Column("tinyint")
    is_activated: number;

    @Column("tinyint")
    is_email_verification: number;

    @Column("tinyint")
    is_onboarding_done: number;

}