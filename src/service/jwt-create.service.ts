/*
 * @Author: 汤波
 * @Date: 2021-02-23 09:07:23
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 13:11:53
 * @FilePath: \nest-tung-base\src\service\jwt-create.service.ts
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtCreateService {
  constructor(
    // 注入UsersService，所以需要import UsersModule
    // 底下的provider才能被注入
    private readonly jwtService: JwtService,
  ) {}

  async createToken(username: string): Promise<string> {
    return this.jwtService.sign({ username: username });
  }
}
