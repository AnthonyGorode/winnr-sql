import { GameRepository } from './game.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Game } from './game.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Game, GameRepository])],
    exports: [TypeOrmModule]
})
export class GameModule {}
