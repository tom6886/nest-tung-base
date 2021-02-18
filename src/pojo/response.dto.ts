/*
 * @Author: 汤波
 * @Date: 2021-01-27 15:30:46
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-18 15:01:34
 * @FilePath: \nest-tung-base\src\pojo\response.dto.ts
 */

export interface Pager<T> {
  total: number;
  size: number;
  current: number;
  records: T[];
}

export interface UserDTO {
  id: string;
  nickname: string;
  username: string;
}
