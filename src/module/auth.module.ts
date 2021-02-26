/*
 * @Author: 汤波
 * @Date: 2021-02-23 13:00:17
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-26 16:01:02
 * @FilePath: \nest-tung-base\src\module\auth.module.ts
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtCreate } from 'src/auth/jwt.create';
import ConfigService from 'src/config/config.service';
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
  providers: [JwtCreate],
  exports: [JwtCreate],
})
export class AuthModule {}
