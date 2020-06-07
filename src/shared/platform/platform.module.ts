import { PlatformRepository } from './platform.repository';
import { Platform } from './platform.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Platform, PlatformRepository])],
    exports: [TypeOrmModule]
})
export class PlatformModule {}
