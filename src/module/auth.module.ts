/*
 * @Author: 汤波
 * @Date: 2021-02-23 13:00:17
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 17:21:55
 * @FilePath: \nest-tung-base\src\module\auth.module.ts
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import ConfigService from 'src/config/config.service';
import { JwtCreateService } from 'src/service/jwt-create.service';
import { JwtStrategyService } from 'src/service/jwt-strategy.service';
import ConfigModule from './config.module';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getJwt().secret,
        signOptions: {
          expiresIn: configService.getJwt().expiresIn,
        },
      }),
    }),
  ],
  providers: [JwtCreateService, JwtStrategyService],
  exports: [JwtCreateService],
})
export class AuthModule {}
