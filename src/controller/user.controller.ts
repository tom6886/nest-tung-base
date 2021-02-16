/*
 * @Author: 汤波
 * @Date: 2021-01-27 16:39:22
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 20:55:23
 * @FilePath: \nest-tung-base\src\controller\user.controller.ts
 */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserListQuery } from 'src/pojo/request.dto';
import { UserService } from 'src/service/user.service';
import { R } from 'src/util/result';

@ApiTags('用户')
@Controller('/system/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ description: '分页查询用户' })
  @Post('/list')
  async list(@Body() queryOption: UserListQuery): Promise<R> {
    return R.ok(await this.userService.list(queryOption));
  }
}
