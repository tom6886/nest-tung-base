/*
 * @Author: 汤波
 * @Date: 2021-01-19 14:46:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-09 11:18:16
 * @FilePath: \nest-tung-base\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigService from './config/config.service';
import ConfigModule from './module/config.module';
import ControllersModule from './module/controllers.module';
import { TypeOrmConfigService } from './service/typeorm.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmConfigService,
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
    console.log(this.config);
    console.log(this.config.getPort());
    AppModule.prefix = this.config.getPrefix();
    AppModule.port = this.config.getPort();
  }
}
