import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductTranslation } from './product_translation.entity';
import { ProductTranslationRepository } from './product_translation.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ProductTranslation, ProductTranslationRepository])],
    exports: [TypeOrmModule]
})
export class ProductTranslationModule {}
