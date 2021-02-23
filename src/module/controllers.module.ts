/*
 * @Author: 汤波
 * @Date: 2021-01-27 16:52:52
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 13:02:17
 * @FilePath: \nest-tung-base\src\module\controllers.module.ts
 */
import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { AuthModule } from './auth.module';
import ServicesModule from './services.module';

@Module({
  imports: [ServicesModule, AuthModule],
  controllers: [UserController],
})
export default class ControllersModule {}
