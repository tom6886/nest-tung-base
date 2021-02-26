/*
 * @Author: 汤波
 * @Date: 2021-02-26 15:22:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-26 17:27:08
 * @FilePath: \nest-tung-base\src\auth\auth.guard.ts
 */
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ResultCodeEnum, ResultMessageEnum } from 'src/enum/result-code.enum';
import { R } from 'src/util/result';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly prefix: string,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(_context: ExecutionContext): Promise<boolean> {
    const request = _context.switchToHttp().getRequest();

    const token = _context.switchToRpc().getData().headers.token;

    console.log(token);

    if (this.whiteList.indexOf(request.url.replace(this.prefix, '')) > -1) {
      return true;
    }

    if (!token) {
      throw new HttpException(
        R.error(ResultCodeEnum.UNAUTHORIZED, ResultMessageEnum.UNAUTHORIZED),
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = this.jwtService.decode(token);

    if (payload['exp'] * 1000 < new Date().getTime()) {
      throw new HttpException(
        R.error(ResultCodeEnum.TOKEN_EXPIRED, ResultMessageEnum.TOKEN_EXPIRED),
        HttpStatus.UNAUTHORIZED,
      );
    }

    request.username = payload['username'];
    return true;
  }

  private whiteList: string[] = ['/system/user/login'];
}
