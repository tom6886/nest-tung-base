/*
 * @Author: 汤波
 * @Date: 2021-01-19 14:46:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-20 16:49:12
 * @FilePath: \nest-tung-base\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
