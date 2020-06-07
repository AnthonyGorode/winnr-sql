import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './controller/home/home.module';
import { configService } from './config/config.service';
import { ShoppingController } from './controller/shopping/shopping.controller';
import { ShoppingModule } from './controller/shopping/shopping.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    HomeModule,
    ShoppingModule
  ],
  controllers: [ShoppingController]
})
export class AppModule {}
