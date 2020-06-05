import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PlatformProduct } from '../platform/platform.entity';

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn()
    id_product: number;

    @ManyToOne(() => PlatformProduct, platformProduct => platformProduct.products)
    @JoinColumn({ name: 'id_platform' })
    platform: PlatformProduct;

    @Column({ length: 255 })
    name_product: string;

    @Column({ length: 255 })
    category_product: string;

    @Column("decimal",{precision: 10, scale: 2})
    price_product: number;

    @Column("decimal",{precision: 10, scale: 2})
    recommanded_price_product: number;

    @Column({ length: 255 })
    currency_code_product: string;

    @Column("int")
    stock_product: number;

    @Column({ length: 255 })
    small_cover_product: string;

    @Column({ length: 255 })
    medium_cover_product: string;

    @Column({ length: 255 })
    large_cover_product: string;

    @Column({ length: 255 })
    largest_cover_product: string;

    @Column({ type: 'datetime' })
    release_at: string;

    @Column("tinyint")
    is_discover_now: number;
}