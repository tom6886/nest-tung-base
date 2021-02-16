/*
 * @Author: 汤波
 * @Date: 2021-02-05 16:57:47
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 12:36:08
 * @FilePath: \nest-tung-base\src\config\typeorm.config.ts
 */
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import ConfigService from 'src/config/config.service';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  // 注入config service取得env变量
  constructor(private readonly configService: ConfigService) {}

  // 就是回传TypeOrmOptions对象
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const config = this.configService.getTypeorm();
    return {
      type: 'mysql',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      synchronize: config.synchronize,
      logging: config.logging,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      timezone: config.timezone,
    };
  }
}
