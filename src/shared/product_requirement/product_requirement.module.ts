import { ProductRequirementRepository } from './product_requirement.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductRequirement } from './product_requirement.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductRequirement, ProductRequirementRepository])],
    exports: [TypeOrmModule]
})
export class ProductRequirementModule {}
