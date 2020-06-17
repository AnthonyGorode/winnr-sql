import { Product } from '../product/product.entity';
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Requirement } from '../requirement/requirement.entity';

@Entity()
export class ProductRequirement {

    @ManyToOne(() => Product, product => product.productRequirement, {primary: true})
    @JoinColumn({ name: 'id_product' })
    product!: Product;

    @ManyToOne(() => Requirement, requirement => requirement.productRequirement, {primary: true})
    @JoinColumn({ name: 'id_requirement' })
    requirement!: Requirement;

    @Column('int')
    type: number;

}