import { Product } from './../product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { UserGiveaway } from '../user_giveaway/user_giveaway.entity';

@Entity()
export class Giveaway {

    @PrimaryGeneratedColumn()
    id_giveaway: number;

    @ManyToOne(() => Product, product => product)
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @OneToMany(() => UserGiveaway, userGiveaway => userGiveaway.giveaway)
    userPlayed: UserGiveaway[];

    @Column({ type: 'datetime' })
    started_at: string;

    @Column({ type: 'datetime' })
    ended_at: string;

    @Column("tinyint")
    ended_giveaway: number;

    @Column("tinyint")
    product_buying: number;

}