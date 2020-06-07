import { BattleRoyaleRepository } from './../../shared/battle_royale/battle_royale.repository';
import { BattleRoyale } from './../../shared/battle_royale/battle_royale.entity';
import { GameRepository } from '../../shared/game/game.repository';
import { Product } from '../../shared/product/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../../shared/product/product.repository';
import { Game } from 'src/shared/game/game.entity';
import { SkinsRepository } from 'src/shared/skins/skins.repository';
import { Skins } from 'src/shared/skins/skins.entity';
import { GiftCard } from 'src/shared/gift_card/gift_card.entity';
import { GiftCardRepository } from 'src/shared/gift_card/gift_card.repository';
import { GiveawayRepository } from 'src/shared/giveaway/giveaway.repository';
import { Giveaway } from 'src/shared/giveaway/giveaway.entity';

@Injectable()
export class HomeService {

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

    public getAllProducts(): Promise<any> {
        return this.productRepository.queryAllProductsDetails();
        // return this.productRepository.find({ relations: ['productTranslation','productRequirement','productRequirement.requirement'] });
    }

    public getProductByName(): Promise<Product> {
        return this.productRepository.findByName('WITCHER 3 - WILD HUNT');
    }

    public getAllGames(): Promise<Game[]> {
        return this.gameRepository.find();
    }

    public async getAllProductByCategory(): Promise<any> {
        const products = {
            games: await this.gameRepository.queryAllGamesDetails(),
            giftCard: await this.giftCardRepository.queryAllGiftCardDetails()
        };

        return products;
    }

    public getAllCurrentBattleRoyaleProducts() {
        return this.battleRoyaleRepository.getAllCurrentBattleRoyaleProduct();
    }

    public getAllCurrentGiveawayProducts() {
        return this.giveawayRepository.getAllCurrentGiveawayProduct();
    }

}
