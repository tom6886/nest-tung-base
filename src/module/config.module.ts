/*
 * @Author: 汤波
 * @Date: 2021-02-03 15:37:10
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-26 10:39:38
 * @FilePath: \nest-tung-base\src\module\config.module.ts
 */
import 'dotenv/config';
import { Module } from '@nestjs/common';
import { NacosConfigClient } from 'nacos';
import ConfigService from 'src/config/config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useFactory: async () => {
        const configClient = new NacosConfigClient({
          serverAddr: process.env.CONFIG_SERVER,
          namespace: process.env.CONFIG_NAMESPACE,
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
