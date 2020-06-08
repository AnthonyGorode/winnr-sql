import { Game } from './../game/game.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Platform } from '../platform/platform.entity';
import { ProductRequirement } from '../product_requirement/product_requirement.entity';
import { ProductTranslation } from '../product_translation/product_translation.entity';
import { Skins } from '../skins/skins.entity';
import { GiftCard } from '../gift_card/gift_card.entity';
import { BattleRoyale } from '../battle_royale/battle_royale.entity';
import { Giveaway } from '../giveaway/giveaway.entity';
import { OrderProduct } from '../order_product/order_product.entity';

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn()
    id_product: number;

    @ManyToOne(() => Platform, platform => platform.products)
    @JoinColumn({ name: 'id_platform' })
    platform: Platform;

    @OneToMany(() => ProductRequirement, productRequirement => productRequirement.product)
    productRequirement!: ProductRequirement[];

    @OneToMany(() => ProductTranslation, productTranslation => productTranslation.product)
    productTranslation: ProductTranslation[];

    @OneToMany(() => BattleRoyale, battleRoyale => battleRoyale.product)
    battleRoyales: BattleRoyale[];

    @OneToMany(() => Giveaway, giveaway => giveaway.product)
    giveaways: Giveaway[];

    @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
    ordersProduct: OrderProduct[];

    @OneToOne(() => Game, game => game.product)
    game!: Game;
    
    @OneToOne(() => Skins, skins => skins.product)
    skins!: Skins;

    @OneToOne(() => GiftCard, giftCard => giftCard.product)
    giftCard!: GiftCard;

    @Column({ length: 255 })
    name_product: string;

    @Column()
    type_product: number;

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