import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './controller/home/home.module';
import { configService } from './config/config.service';
import { ShoppingModule } from './controller/shopping/shopping.module';
import { LoginModule } from './controller/login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    HomeModule,
    ShoppingModule,
    LoginModule
  ]
})
export class AppModule {}
