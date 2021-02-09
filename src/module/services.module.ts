/*
 * @Author: 汤波
 * @Date: 2021-01-27 16:53:23
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-03 11:27:38
 * @FilePath: \nest-tung-base\src\module\services.module.ts
 */
import { Module } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import EntityModule from './entities.module';

const serviceList = [UserService];
@Module({
  imports: [EntityModule],
  providers: [...serviceList],
  exports: [...serviceList],
})
export default class ServicesModule {}
