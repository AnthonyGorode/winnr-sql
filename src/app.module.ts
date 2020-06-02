import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';
import { ProductModule } from './shared/product/product.module';
import { configService } from './config/config.service';
import { PlatformModule } from './shared/platform/platform.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    HomeModule,
    ProductModule,
    PlatformModule
  ]
})
export class AppModule {}
