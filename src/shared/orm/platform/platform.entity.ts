import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Platform {
    
    @PrimaryGeneratedColumn()
    id_platform: number;

    @Column({ length: 255 })
    name_platform: string;

    @Column({ length: 255 })
    image_platform: string;

    @OneToMany(() => Product, product => product.platform)
    products: Product[];
}