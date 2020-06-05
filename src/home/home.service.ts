import { GameRepository } from './../shared/game/game.repository';
import { Product } from './../shared/product/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './../shared/product/product.repository';
import { Game } from 'src/shared/game/game.entity';
import { SkinsRepository } from 'src/shared/skins/skins.repository';
import { Skins } from 'src/shared/skins/skins.entity';
import { GiftCard } from 'src/shared/gift_card/gift_card.entity';
import { GiftCardRepository } from 'src/shared/gift_card/gift_card.repository';

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
        private readonly giftCardRepository: GiftCardRepository
    ) {}

    public getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    public getProductByName(): Promise<Product> {
        return this.productRepository.findByName('WITCHER 3 - WILD HUNT');
    }

    public getAllGames(): Promise<Game[]> {
        return this.gameRepository.find();
    }

    public async getAllProductByCategory(): Promise<any> {
        const products = {
            games: await this.gameRepository.find({ relations: ['product'] }),
            skins: await this.skinsRepository.find({ relations: ['product'] }),
            giftCard: await this.giftCardRepository.find({ relations: ['product'] })
        };

        return products;
    }

}
