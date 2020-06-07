import { Module } from '@nestjs/common';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';

import { UserGiveawayModule } from './../../shared/user_giveaway/user_giveaway.module';
import { UserBattleRoyaleModule } from '../../shared/user_battle_royale/user_battle_royale.module';
import { WinchModule } from '../../shared/winch/winch.module';
import { ProductRequirementModule } from '../../shared/product_requirement/product_requirement.module';
import { DeveloperModule } from '../../shared/developer/developer.module';
import { GameModule } from '../../shared/game/game.module';
import { PlatformModule } from '../../shared/platform/platform.module';
import { ProductModule } from '../../shared/product/product.module';
import { SkinsModule } from 'src/shared/skins/skins.module';
import { GiftCardModule } from 'src/shared/gift_card/gift_card.module';
import { ProductTranslationModule } from 'src/shared/product_translation/product_translation.module';
import { RequirementProductModule } from 'src/shared/requirement/requirement.module';
import { BattleRoyaleModule } from 'src/shared/battle_royale/battle_royale.module';
import { AssociationModule } from '../../shared/association/association.module';
import { UserModule } from '../../shared/user/user.module';
import { GiveawayModule } from 'src/shared/giveaway/giveaway.module';

@Module({
  imports: [
    ProductModule,
    PlatformModule,
    GameModule,
    SkinsModule,
    GiftCardModule,
    DeveloperModule,
    RequirementProductModule,
    ProductTranslationModule,
    ProductRequirementModule,
    WinchModule,
    AssociationModule,
    BattleRoyaleModule,
    UserBattleRoyaleModule,
    UserModule,
    GiveawayModule,
    UserGiveawayModule
  ],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
