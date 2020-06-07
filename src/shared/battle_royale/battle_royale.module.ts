import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleRoyale } from './battle_royale.entity';
import { BattleRoyaleRepository } from './battle_royale.repository';

@Module({
    imports: [TypeOrmModule.forFeature([BattleRoyale, BattleRoyaleRepository])],
    exports: [TypeOrmModule]
})
export class BattleRoyaleModule {}
