import { Product } from './../product/product.entity';
import { Entity, OneToOne, JoinColumn, Column } from "typeorm";

@Entity()
export class GiftCard {

    @OneToOne(() => Product, {primary: true})
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @Column('int')
    code_area_validity: number;

}