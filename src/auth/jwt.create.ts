/*
 * @Author: 汤波
 * @Date: 2021-02-23 09:07:23
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-26 16:03:33
 * @FilePath: \nest-tung-base\src\auth\jwt.create.ts
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtCreate {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(username: string): Promise<string> {
    return this.jwtService.sign({ username: username });
  }
}
