import { HomeService } from './home.service';
import { Product } from '../../shared/product/product.entity';
import { Controller, Get } from '@nestjs/common';
import { Game } from 'src/shared/game/game.entity';
import { BattleRoyale } from 'src/shared/battle_royale/battle_royale.entity';
import { Giveaway } from 'src/shared/giveaway/giveaway.entity';

@Controller('home')
export class HomeController {

    constructor(
        private homeService: HomeService
    ) { }

    @Get()
    public welcomeHome(): any {
        return {api: 'home', message: 'All routes referring to the home page.'};
    }

    @Get('all')
    public allProducts(): Promise<any> {
        return this.homeService.getAllProducts();
    }

    @Get('only')
    public witcherIIIProduct(): Promise<Product> {
        return this.homeService.getProductByName();
    }

    @Get('games')
    public allGamesProducts(): Promise<Game[]> {
        return this.homeService.getAllGames();
    }

    @Get('product-list')
    public allProductByCategory(): any {
        return this.homeService.getAllProductByCategory();
    }

    @Get('battle-royale-list')
    public allBattleRoyaleProducts(): Promise<BattleRoyale[]> {
        return this.homeService.getAllCurrentBattleRoyaleProducts();
    }

    @Get('giveaway-list')
    public allGiveawayProducts(): Promise<Giveaway[]> {
        return this.homeService.getAllCurrentGiveawayProducts();
    }

}
