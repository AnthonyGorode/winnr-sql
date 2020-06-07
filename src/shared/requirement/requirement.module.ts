import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Requirement } from './requirement.entity';
import { RequirementRepository } from './requirement.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Requirement, RequirementRepository])],
    exports: [TypeOrmModule]
})
export class RequirementProductModule {}
