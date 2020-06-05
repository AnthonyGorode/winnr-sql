import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';
import { ProductModule } from './shared/product/product.module';
import { configService } from './config/config.service';
import { PlatformModule } from './shared/platform/platform.module';
import { GameModule } from './shared/game/game.module';
import { DeveloperModule } from './shared/developer/developer.module';
import { SkinsModule } from './shared/skins/skins.module';
import { GiftCardModule } from './shared/gift_card/gift_card.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    HomeModule,
    ProductModule,
    PlatformModule,
    GameModule,
    DeveloperModule,
    SkinsModule,
    GiftCardModule
  ]
})
export class AppModule {}
