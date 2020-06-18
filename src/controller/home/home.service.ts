import { BattleRoyaleRepository } from './../../shared/orm/battle_royale/battle_royale.repository';
import { BattleRoyale } from './../../shared/orm/battle_royale/battle_royale.entity';
import { GameRepository } from './../../shared/orm/game/game.repository';
import { Product } from './../../shared/orm/product/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../shared/orm/product/product.repository';
import { Game } from './../../shared/orm/game/game.entity';
import { SkinsRepository } from './../../shared/orm/skins/skins.repository';
import { Skins } from './../../shared/orm/skins/skins.entity';
import { GiftCard } from './../../shared/orm/gift_card/gift_card.entity';
import { GiftCardRepository } from './../../shared/orm/gift_card/gift_card.repository';
import { GiveawayRepository } from './../../shared/orm/giveaway/giveaway.repository';
import { Giveaway } from './../../shared/orm/giveaway/giveaway.entity';

/**
 * Provide all operations about home :
 * product, battle royale, giveaway
 *
 * @export
 * @class HomeService
 */
@Injectable()
export class HomeService {

    /**
     * Creates an instance of HomeService.
     * @param {ProductRepository} productRepository
     * @param {GameRepository} gameRepository
     * @param {SkinsRepository} skinsRepository
     * @param {GiftCardRepository} giftCardRepository
     * @param {BattleRoyaleRepository} battleRoyaleRepository
     * @param {GiveawayRepository} giveawayRepository
     * @memberof HomeService
     */
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: ProductRepository,
        @InjectRepository(Game)
        private readonly gameRepository: GameRepository,
        @InjectRepository(Skins)
        private readonly skinsRepository: SkinsRepository,
        @InjectRepository(GiftCard)
        private readonly giftCardRepository: GiftCardRepository,
        @InjectRepository(BattleRoyale)
        private readonly battleRoyaleRepository: BattleRoyaleRepository,
        @InjectRepository(Giveaway)
        private readonly giveawayRepository: GiveawayRepository
    ) {}

    /**
     * Get all products
     *
     * @returns {Promise<any>} all products
     * @memberof HomeService
     */
    public getAllProducts(): Promise<any> {
        return this.productRepository.queryAllProductsDetails();
    }

    /**
     * Get a game : Witcher III 
     *
     * @returns {Promise<Product>} a game : Witcher III
     * @memberof HomeService
     */
    public getProductByName(): Promise<Product> {
        return this.productRepository.findByName('WITCHER 3 - WILD HUNT');
    }

    /**
     * Get all games type product
     *
     * @returns {Promise<Game[]>} all games
     * @memberof HomeService
     */
    public getAllGames(): Promise<Game[]> {
        return this.gameRepository.find();
    }

    /**
     * Get all games and gift_card and their details
     *
     * @returns {Promise<any>} all gift_card and games
     * @memberof HomeService
     */
    public async getAllProductByCategory(): Promise<any> {
        const products = {
            games: await this.gameRepository.queryAllGamesDetails(),
            giftCard: await this.giftCardRepository.queryAllGiftCardDetails()
        };

        return products;
    }

    /**
     * Get all battle royale and their products
     *
     * @returns all battle royale
     * @memberof HomeService
     */
    public getAllCurrentBattleRoyaleProducts() {
        return this.battleRoyaleRepository.getAllCurrentBattleRoyaleProduct();
    }

    /**
     * Get all giveaways and their products
     *
     * @returns all giveaways
     * @memberof HomeService
     */
    public getAllCurrentGiveawayProducts() {
        return this.giveawayRepository.getAllCurrentGiveawayProduct();
    }

}
