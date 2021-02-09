/*
 * @Author: 汤波
 * @Date: 2021-02-03 15:37:10
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-05 17:32:55
 * @FilePath: \nest-tung-base\src\module\config.module.ts
 */

import { Module } from '@nestjs/common';
import { NacosConfigClient } from 'nacos';
import ConfigService from 'src/config/config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useFactory: async () => {
        const configClient = new NacosConfigClient({
          serverAddr: '192.168.207.40:8848',
          namespace: '0ccfebd1-bcff-4e2d-9436-2e780fb3ae16',
        });
        // get config once
        const content = await configClient.getConfig('1', 'NEST_GROUP');
        return new ConfigService(JSON.parse(content));
      },
    },
  ],
  exports: [ConfigService],
})
export default class ConfigModule {}
