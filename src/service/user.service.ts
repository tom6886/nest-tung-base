/*
 * @Author: 汤波
 * @Date: 2021-01-22 16:55:20
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-22 17:28:47
 * @FilePath: \nest-tung-base\src\service\user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly accountRepository: Repository<UserEntity>,
  ) {}
}
