import { UserGiveawayRepository } from './user_giveaway.repository';
import { UserGiveaway } from './user_giveaway.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserGiveaway, UserGiveawayRepository])],
    exports: [TypeOrmModule]
})
export class UserGiveawayModule {}
