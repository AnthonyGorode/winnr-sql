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

/**
 * Product Entity
 *
 * @export
 * @class Product
 */
@Entity()
export class Product {
 
    /**
     * Primary key
     *
     * @type {number}
     * @memberof Product
     */
    @PrimaryGeneratedColumn()
    id_product: number;

    /**
     * Foreign key reference to Platform Entity
     *
     * @type {Platform}
     * @memberof Product
     */
    @ManyToOne(() => Platform, platform => platform.products)
    @JoinColumn({ name: 'id_platform' })
    platform: Platform;

    /**
     * Association mapping to ProductRequirement Entity
     *
     * @type {ProductRequirement[]}
     * @memberof Product
     */
    @OneToMany(() => ProductRequirement, productRequirement => productRequirement.product)
    productRequirement!: ProductRequirement[];

    /**
     * Association mapping to ProductTranslation Entity
     *
     * @type {ProductTranslation[]}
     * @memberof Product
     */
    @OneToMany(() => ProductTranslation, productTranslation => productTranslation.product)
    productTranslation: ProductTranslation[];

    /**
     * Association mapping to BattleRoyale Entity
     *
     * @type {BattleRoyale[]}
     * @memberof Product
     */
    @OneToMany(() => BattleRoyale, battleRoyale => battleRoyale.product)
    battleRoyales: BattleRoyale[];

    /**
     * Association mapping to Giveaway Entity
     *
     * @type {Giveaway[]}
     * @memberof Product
     */
    @OneToMany(() => Giveaway, giveaway => giveaway.product)
    giveaways: Giveaway[];

    /**
     * Association mapping to OrderProduct Entity
     *
     * @type {OrderProduct[]}
     * @memberof Product
     */
    @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
    ordersProduct: OrderProduct[];

    /**
     * Inheritance : Direct relation to Game Entity
     *
     * @type {Game}
     * @memberof Product
     */
    @OneToOne(() => Game, game => game.product)
    game!: Game;
  
    /**
     * Inheritance : Direct relation to Skins Entity
     *
     * @type {Skins}
     * @memberof Product
     */
    @OneToOne(() => Skins, skins => skins.product)
    skins!: Skins;

    /**
     * Inheritance : Direct relation to GiftCard Entity
     *
     * @type {GiftCard}
     * @memberof Product
     */
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