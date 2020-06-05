import { DeveloperRepository } from './developer.repository';
import { Developer } from './developer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Developer, DeveloperRepository])],
    exports: [TypeOrmModule]
})
export class DeveloperModule {}
