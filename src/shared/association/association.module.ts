import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Association } from './association.entity';
import { AssociationRepository } from './association.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Association, AssociationRepository])],
    exports: [TypeOrmModule]
})
export class AssociationModule {}
