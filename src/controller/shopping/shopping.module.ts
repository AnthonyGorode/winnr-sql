import { ShoppingController } from './shopping.controller';
import { AssociationModule } from '../../shared/association/association.module';
import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';

@Module({
  imports: [
    AssociationModule
  ],
  controllers: [ShoppingController],
  providers: [ShoppingService]
})
export class ShoppingModule {}
