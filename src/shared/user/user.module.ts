import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserRepository])],
    exports: [TypeOrmModule]
})
export class UserModule {}