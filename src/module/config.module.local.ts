/*
 * @Author: 汤波
 * @Date: 2021-02-03 15:37:10
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-15 11:14:32
 * @FilePath: \nest-tung-base\src\module\config.module.local.ts
 */

import { Module } from '@nestjs/common';
import ConfigService from 'src/config/config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env.${process.env.NODE_ENV.trim()}`),
    },
  ],
  exports: [ConfigService],
})
export default class ConfigModule {}
