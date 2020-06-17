import { Product } from './../product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class ProductTranslation {

    @PrimaryGeneratedColumn()
    id_product_translation: string;

    @ManyToOne(() => Product, product => product.productTranslation)
    @JoinColumn({ name: 'id_product' })
    product: Product;

    @Column('varchar',{ length: 6 })
    lang_product_translation: string;

    @Column('varchar',{ length: 300 })
    title_product_translation: string;

    @Column('text')
    description_product_translation: string;

}