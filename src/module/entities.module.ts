/*
 * @Author: 汤波
 * @Date: 2021-01-22 16:39:03
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-03 11:27:31
 * @FilePath: \nest-tung-base\src\module\entities.module.ts
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';

const entityList = [UserEntity];

@Module({
  imports: [TypeOrmModule.forFeature(entityList)],
  exports: [TypeOrmModule.forFeature(entityList)],
})
export default class EntityModule {}
