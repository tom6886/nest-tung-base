/*
 * @Author: 汤波
 * @Date: 2021-01-27 16:39:22
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-28 09:40:44
 * @FilePath: \nest-tung-base\src\controller\user.controller.ts
 */
import { Controller, Post } from '@nestjs/common';
import { UserListQuery } from 'src/pojo/request.dto';
import { UserService } from 'src/service/user.service';
import { R } from 'src/util/result';

@Controller('/system/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/list')
  async list(queryOption: UserListQuery): Promise<R> {
    return R.ok(this.userService.list(queryOption));
  }
}
