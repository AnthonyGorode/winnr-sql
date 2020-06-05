import { SkinsRepository } from './skins.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Skins } from './skins.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Skins, SkinsRepository])],
    exports: [TypeOrmModule]
})
export class SkinsModule {}
