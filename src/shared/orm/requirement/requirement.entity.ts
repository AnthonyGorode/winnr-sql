import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductRequirement } from "../product_requirement/product_requirement.entity";

@Entity()
export class Requirement {

    @PrimaryGeneratedColumn()
    id_requirement: number;

    @OneToMany(() => ProductRequirement, productRequirement => productRequirement.requirement)
    productRequirement!: ProductRequirement[];

    @Column({ length: 255 })
    name_requirement: string;

    @Column({ length: 255 })
    description_requirement: string;

}