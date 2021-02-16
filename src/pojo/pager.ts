import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: 汤波
 * @Date: 2021-01-25 16:56:30
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 16:44:13
 * @FilePath: \nest-tung-base\src\pojo\pager.ts
 */
export class Pager<T> {
  total: number;
  size: number;
  current: number;
  records: T[];
}

export class PagerQuery {
  @ApiProperty({ description: '页数' })
  pageNumber: number;

  @ApiProperty({ description: '分页大小' })
  pageSize: number;
}
