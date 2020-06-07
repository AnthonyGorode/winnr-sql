import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Winch } from './winch.entity';
import { WinchRepository } from './winch.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Winch, WinchRepository])],
    exports: [TypeOrmModule]
})
export class WinchModule {}
