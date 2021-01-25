/*
 * @Author: 汤波
 * @Date: 2021-01-22 16:55:20
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-25 17:15:11
 * @FilePath: \nest-tung-base\src\service\user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { userListQuery } from 'src/pojo/request.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async list(queryOption: userListQuery) {
    const { pageSize = 10, pageNumber = 1, username } = queryOption;

    const queryConditionList = [];

    if (username) {
      queryConditionList.push('tc_user.username LIKE :username');
    }

    return null;
  }
}
