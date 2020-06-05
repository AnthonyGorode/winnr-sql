import { GiftCardRepository } from './gift_card.repository';
import { GiftCard } from './gift_card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([GiftCard, GiftCardRepository])],
    exports: [TypeOrmModule]
})
export class GiftCardModule {}
