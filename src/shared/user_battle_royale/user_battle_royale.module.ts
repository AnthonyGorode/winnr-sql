import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBattleRoyale } from './user_battle_royale.entity';
import { UserBattleRoyaleRepository } from './user_battle_royale.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserBattleRoyale, UserBattleRoyaleRepository])],
    exports: [TypeOrmModule]
})
export class UserBattleRoyaleModule {}
