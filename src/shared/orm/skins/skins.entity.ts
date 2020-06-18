import { Entity, OneToOne, JoinColumn, Column } from "typeorm";
import { Product } from "../product/product.entity";

@Entity()
export class Skins {

    @OneToOne(() => Product, {primary: true})
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @Column('varchar', { length: 300 })
    game_referral: string;

    @Column('int')
    type_skins: number;

}