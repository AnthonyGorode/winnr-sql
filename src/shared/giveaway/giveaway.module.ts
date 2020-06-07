import { GiveawayRepository } from './giveaway.repository';
import { Giveaway } from './giveaway.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Giveaway, GiveawayRepository])],
    exports: [TypeOrmModule]
})
export class GiveawayModule {}
