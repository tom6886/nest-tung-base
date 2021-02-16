/*
 * @Author: 汤波
 * @Date: 2021-01-25 17:00:17
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 16:44:24
 * @FilePath: \nest-tung-base\src\pojo\request.dto.ts
 */

import { ApiProperty } from '@nestjs/swagger';
import { PagerQuery } from './pager';

export class UserListQuery extends PagerQuery {
  @ApiProperty({ description: '用户名' })
  username: string;
}
