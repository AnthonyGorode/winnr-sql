import { ErrorHandlerService } from './services/errors-handler.service';
import { NotificationTranslationRepository } from './orm/notification_translation/notification_translation.repository';
import { NotificationTranslation } from './orm/notification_translation/notification_translation.entity';
import { NotificationRepository } from './orm/notification/notification.repository';
import { AddressRepository } from './orm/address/address.repository';
import { OrderProductRepository } from './orm/order_product/order_product.repository';
import { OrderProduct } from './orm/order_product/order_product.entity';
import { OrderRepository } from './orm/order/order.repository';
import { Order } from './orm/order/order.entity';
import { WinchRepository } from './orm/winch/winch.repository';
import { UserGiveawayRepository } from './orm/user_giveaway/user_giveaway.repository';
import { UserGiveaway } from './orm/user_giveaway/user_giveaway.entity';
import { UserBattleRoyaleRepository } from './orm/user_battle_royale/user_battle_royale.repository';
import { UserBattleRoyale } from './orm/user_battle_royale/user_battle_royale.entity';
import { RequirementRepository } from './orm/requirement/requirement.repository';
import { Requirement } from './orm/requirement/requirement.entity';
import { ProductRequirementRepository } from './orm/product_requirement/product_requirement.repository';
import { ProductRequirement } from './orm/product_requirement/product_requirement.entity';
import { ProductRepository } from './orm/product/product.repository';
import { Product } from './orm/product/product.entity';
import { PlatformRepository } from './orm/platform/platform.repository';
import { GiftCardRepository } from './orm/gift_card/gift_card.repository';
import { GiftCard } from './orm/gift_card/gift_card.entity';
import { GameRepository } from './orm/game/game.repository';
import { Game } from './orm/game/game.entity';
import { DeveloperRepository } from './orm/developer/developer.repository';
import { Developer } from './orm/developer/developer.entity';
import { BattleRoyaleRepository } from './orm/battle_royale/battle_royale.repository';
import { AssociationRepository } from './orm/association/association.repository';
import { Association } from './orm/association/association.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BattleRoyale } from './orm/battle_royale/battle_royale.entity';
import { Giveaway } from './orm/giveaway/giveaway.entity';
import { GiveawayRepository } from './orm/giveaway/giveaway.repository';
import { Platform } from './orm/platform/platform.entity';
import { ProductTranslation } from './orm/product_translation/product_translation.entity';
import { ProductTranslationRepository } from './orm/product_translation/product_translation.repository';
import { Skins } from './orm/skins/skins.entity';
import { SkinsRepository } from './orm/skins/skins.repository';
import { User } from './orm/user/user.entity';
import { UserRepository } from './orm/user/user.repository';
import { Winch } from './orm/winch/winch.entity';
import { Address } from './orm/address/address.entity';
import { Notification } from './orm/notification/notification.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Association, AssociationRepository,
        BattleRoyale, BattleRoyaleRepository,
        Developer, DeveloperRepository,
        Game, GameRepository,
        GiftCard, GiftCardRepository,
        Giveaway, GiveawayRepository,
        Platform, PlatformRepository,
        Product, ProductRepository,
        ProductRequirement, ProductRequirementRepository,
        ProductTranslation, ProductTranslationRepository,
        Requirement, RequirementRepository,
        Skins, SkinsRepository,
        User, UserRepository,
        UserBattleRoyale, UserBattleRoyaleRepository,
        UserGiveaway, UserGiveawayRepository,
        Winch, WinchRepository,
        Order, OrderRepository,
        OrderProduct, OrderProductRepository,
        Address, AddressRepository,
        Notification, NotificationRepository,
        NotificationTranslation, NotificationTranslationRepository
    ])],
    providers: [ErrorHandlerService],
    exports: [TypeOrmModule, ErrorHandlerService]
})
export class SharedModule {}
