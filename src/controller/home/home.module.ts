import { SharedModule } from './../../shared/shared.module';
import { Module } from '@nestjs/common';

import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [SharedModule],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
