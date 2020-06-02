import { ProductModule } from './../shared/product/product.module';
import { Module } from '@nestjs/common';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';


@Module({
  imports: [ProductModule],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
