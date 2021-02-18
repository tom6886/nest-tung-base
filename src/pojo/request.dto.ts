/*
 * @Author: 汤波
 * @Date: 2021-01-25 17:00:17
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-18 18:04:32
 * @FilePath: \nest-tung-base\src\pojo\request.dto.ts
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PagerQueryDTO {
  @ApiProperty({ description: '页数' })
  pageNumber: number;

  @ApiProperty({ description: '分页大小' })
  pageSize: number;
}

export class UserListQueryDTO extends PagerQueryDTO {
  @ApiProperty({ description: '用户名' })
  username: string;
}

export class UserLoginDTO {
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ description: '用户名' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty({ description: '密码' })
  password: string;
}
