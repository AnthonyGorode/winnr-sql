import { DeveloperModule } from './../shared/developer/developer.module';
import { GameModule } from './../shared/game/game.module';
import { PlatformModule } from './../shared/platform/platform.module';
import { ProductModule } from './../shared/product/product.module';
import { Module } from '@nestjs/common';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { SkinsModule } from 'src/shared/skins/skins.module';
import { GiftCardModule } from 'src/shared/gift_card/gift_card.module';

@Module({
  imports: [
    ProductModule,
    PlatformModule,
    GameModule,
    SkinsModule,
    GiftCardModule,
    DeveloperModule
  ],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
