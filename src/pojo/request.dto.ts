/*
 * @Author: 汤波
 * @Date: 2021-01-25 17:00:17
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-25 17:08:06
 * @FilePath: \nest-tung-base\src\pojo\request.dto.ts
 */

import { pager } from './pager';

export class userListQuery extends pager {
  username: string;
}
