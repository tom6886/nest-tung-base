/*
 * @Author: 汤波
 * @Date: 2021-01-19 14:46:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 12:34:45
 * @FilePath: \nest-tung-base\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigService from './config/config.service';
import ConfigModule from './module/config.module';
import ControllersModule from './module/controllers.module';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmConfig,
    }),
    ConfigModule,
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  public static prefix: string;
  public static port: number;
  constructor(private readonly config: ConfigService) {
    AppModule.prefix = this.config.getPrefix();
    AppModule.port = this.config.getPort();
  }
}
