import { PlatformRepository } from './platform.repository';
import { PlatformProduct } from './platform.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([PlatformProduct, PlatformRepository])],
    exports: [TypeOrmModule]
})
export class PlatformModule {}
