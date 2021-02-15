/*
 * @Author: 汤波
 * @Date: 2021-01-25 16:56:30
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-15 11:14:41
 * @FilePath: \nest-tung-base\src\pojo\pager.ts
 */
export interface Pager<T> {
  total: number;
  size: number;
  current: number;
  records: T[];
}

export interface PagerQuery {
  pageNumber: number;
  pageSize: number;
}
