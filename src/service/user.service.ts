/*
 * @Author: 汤波
 * @Date: 2021-01-22 16:55:20
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 21:36:38
 * @FilePath: \nest-tung-base\src\service\user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Pager } from 'src/pojo/pager';
import { UserListQuery } from 'src/pojo/request.dto';
import { UserDTO } from 'src/pojo/user.dto';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async list(queryOption: UserListQuery): Promise<Pager<UserDTO>> {
    const { pageSize = 10, pageNumber = 1, username } = queryOption;

    const queryConditionList = [];

    if (username) {
      queryConditionList.push('a.nickname LIKE :username');
    }

    const [data, total] = await getConnection()
      .createQueryBuilder<UserDTO>(UserEntity, 'a')
      .leftJoinAndSelect(UserEntity, 'b', 'a.user_create=b.id')
      .leftJoinAndSelect(UserEntity, 'c', 'a.user_modified=c.id')
      .andWhere(queryConditionList[0], {
        username: `%${username}%`,
      })
      // .orderBy({ 'a.gmtCreate': 'DESC' })
      .skip((pageNumber - 1) * pageSize)
      .take(pageSize)
      .select(['a.id', 'a.nickname', 'a.username'])
      .printSql()
      .getManyAndCount();

    return {
      total,
      size: pageSize,
      current: pageNumber,
      records: data,
    };
  }
}
