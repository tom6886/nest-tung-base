/*
 * @Author: 汤波
 * @Date: 2021-02-23 13:30:14
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 17:21:08
 * @FilePath: \nest-tung-base\src\service\jwt-strategy.service.ts
 */
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import ConfigService from 'src/config/config.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getJwt().secret,
    });
  }

  async validate(payload: any) {
    return { username: payload.username };
  }
}
