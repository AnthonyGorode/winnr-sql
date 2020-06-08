import { SharedModule } from './../../shared/shared.module';
import { ShoppingController } from './shopping.controller';
import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';

@Module({
  imports: [
    SharedModule
  ],
  controllers: [ShoppingController],
  providers: [ShoppingService]
})
export class ShoppingModule {}
