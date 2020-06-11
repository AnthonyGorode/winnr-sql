import { NotificationTranslationRepository } from './notification_translation/notification_translation.repository';
import { NotificationTranslation } from './notification_translation/notification_translation.entity';
import { NotificationRepository } from './notification/notification.repository';
import { AddressRepository } from './address/address.repository';
import { OrderProductRepository } from './order_product/order_product.repository';
import { OrderProduct } from './order_product/order_product.entity';
import { OrderRepository } from './order/order.repository';
import { Order } from './order/order.entity';
import { WinchRepository } from './winch/winch.repository';
import { UserGiveawayRepository } from './user_giveaway/user_giveaway.repository';
import { UserGiveaway } from './user_giveaway/user_giveaway.entity';
import { UserBattleRoyaleRepository } from './user_battle_royale/user_battle_royale.repository';
import { UserBattleRoyale } from './user_battle_royale/user_battle_royale.entity';
import { RequirementRepository } from './requirement/requirement.repository';
import { Requirement } from './requirement/requirement.entity';
import { ProductRequirementRepository } from './product_requirement/product_requirement.repository';
import { ProductRequirement } from './product_requirement/product_requirement.entity';
import { ProductRepository } from './product/product.repository';
import { Product } from './product/product.entity';
import { PlatformRepository } from './platform/platform.repository';
import { GiftCardRepository } from './gift_card/gift_card.repository';
import { GiftCard } from './gift_card/gift_card.entity';
import { GameRepository } from './game/game.repository';
import { Game } from './game/game.entity';
import { DeveloperRepository } from './developer/developer.repository';
import { Developer } from './developer/developer.entity';
import { BattleRoyaleRepository } from './battle_royale/battle_royale.repository';
import { AssociationRepository } from './association/association.repository';
import { Association } from './association/association.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BattleRoyale } from './battle_royale/battle_royale.entity';
import { Giveaway } from './giveaway/giveaway.entity';
import { GiveawayRepository } from './giveaway/giveaway.repository';
import { Platform } from './platform/platform.entity';
import { ProductTranslation } from './product_translation/product_translation.entity';
import { ProductTranslationRepository } from './product_translation/product_translation.repository';
import { Skins } from './skins/skins.entity';
import { SkinsRepository } from './skins/skins.repository';
import { User } from './user/user.entity';
import { UserRepository } from './user/user.repository';
import { Winch } from './winch/winch.entity';
import { Address } from './address/address.entity';
import { Notification } from './notification/notification.entity';

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
    exports: [TypeOrmModule]
})
export class SharedModule {}
