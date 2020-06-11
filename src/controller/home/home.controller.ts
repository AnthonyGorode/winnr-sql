import { HomeService } from './home.service';
import { Product } from '../../shared/product/product.entity';
import { Controller, Get } from '@nestjs/common';
import { Game } from 'src/shared/game/game.entity';
import { BattleRoyale } from 'src/shared/battle_royale/battle_royale.entity';
import { Giveaway } from 'src/shared/giveaway/giveaway.entity';

/**
 * Manage all user requests about the home
 *
 * @export
 * @class HomeController
 */
@Controller('home')
export class HomeController {

    constructor(
        private homeService: HomeService
    ) { }

    /**
     * Type Get()
     * return a welcome message
     *
     * @returns {*}
     * @memberof HomeController
     */
    @Get()
    public welcomeHome(): any {
        return {api: 'home', message: 'All routes referring to the home page.'};
    }

    /**
     * Type Get()
     * Use a service to returns all products
     *
     * @returns {Promise<any>} all products
     * @memberof HomeController
     */
    @Get('all')
    public allProducts(): Promise<any> {
        return this.homeService.getAllProducts();
    }

    /**
     * Type Get()
     * Return all information about the game Witcher III 
     *
     * @returns {Promise<Product>} game Witcher III
     * @memberof HomeController
     */
    @Get('only')
    public witcherIIIProduct(): Promise<Product> {
        return this.homeService.getProductByName();
    }

    /**
     * Type Get()
     * Use a service to return all games and their infos
     *
     * @returns {Promise<Game[]>} all games product
     * @memberof HomeController
     */
    @Get('games')
    public allGamesProducts(): Promise<Game[]> {
        return this.homeService.getAllGames();
    }

    /**
     * Type Get()
     * Use a service to return all game and gift_card products
     *
     * @returns {*} all games and gift_card products
     * @memberof HomeController
     */
    @Get('product-list')
    public allProductByCategory(): any {
        return this.homeService.getAllProductByCategory();
    }

    /**
     * Type Get()
     * Use a service to return all battle Royale and for each battle their products
     *
     * @returns {Promise<BattleRoyale[]>} return all battle Royale
     * @memberof HomeController
     */
    @Get('battle-royale-list')
    public allBattleRoyaleProducts(): Promise<BattleRoyale[]> {
        return this.homeService.getAllCurrentBattleRoyaleProducts();
    }

    /**
     * Type Get()
     * Use a service to return all giveaways and for each giveaways their products
     * 
     *
     * @returns {Promise<Giveaway[]>} all giveaways
     * @memberof HomeController
     */
    @Get('giveaway-list')
    public allGiveawayProducts(): Promise<Giveaway[]> {
        return this.homeService.getAllCurrentGiveawayProducts();
    }

}
