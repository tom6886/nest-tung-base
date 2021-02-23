/*
 * @Author: 汤波
 * @Date: 2021-01-27 16:39:22
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 13:32:27
 * @FilePath: \nest-tung-base\src\controller\user.controller.ts
 */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserListQueryDTO, UserLoginDTO } from 'src/pojo/request.dto';
import { UserService } from 'src/service/user.service';
import { R } from 'src/util/result';
import * as crypto from 'crypto';
import { JwtCreateService } from 'src/service/jwt-create.service';

@ApiTags('用户')
@Controller('/system/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtCreateService,
  ) {}

  @ApiOperation({ description: '用户登录' })
  @Post('/login')
  async login(@Body() userLogin: UserLoginDTO) {
    const user = await this.userService.findOne(userLogin.username);

    if (user == null) {
      return R.fail('账号或密码错误');
    }
    console.log(
      crypto.createHash('md5').update(userLogin.password).digest('hex'),
    );
    if (
      crypto.createHash('md5').update(userLogin.password).digest('hex') !==
      user.password
    ) {
      return R.fail('密码错误');
    }

    return R.ok(await this.jwtService.createToken(user.id.toString()));
  }

  @ApiOperation({ description: '分页查询用户' })
  @Post('/list')
  async list(@Body() queryOption: UserListQueryDTO): Promise<R> {
    return R.ok(await this.userService.list(queryOption));
  }
}
