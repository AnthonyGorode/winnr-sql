import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'winnr',
      password: 'winnr',
      database: 'winnr',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    HomeModule
  ]
})
export class AppModule {}
