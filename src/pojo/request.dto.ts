/*
 * @Author: 汤波
 * @Date: 2021-01-25 17:00:17
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-27 15:29:59
 * @FilePath: \nest-tung-base\src\pojo\request.dto.ts
 */

import { PagerQuery } from './pager';

export interface UserListQuery extends PagerQuery {
  username: string;
}
