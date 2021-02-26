/*
 * @Author: 汤波
 * @Date: 2021-02-25 10:15:04
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-26 17:06:05
 * @FilePath: \nest-tung-base\src\exception\http-exception.filter.ts
 */

import { ArgumentsHost } from '@nestjs/common';
import { ExceptionFilter } from '@nestjs/common';
import { Catch, HttpException } from '@nestjs/common';
import { ResultCodeEnum, ResultMessageEnum } from 'src/enum/result-code.enum';
import { R } from 'src/util/result';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    let result = exception.getResponse();

    if (typeof result === 'string') {
      result = JSON.parse(result);
    }

    // 捕获常规异常
    if ('code' in (result as any) && 'message' in (result as any)) {
      response.status(status).json(result);
      return;
    }

    // 捕获授权异常
    if ('statusCode' in (result as any) && (result as any).statusCode === 401) {
      response
        .status(status)
        .json(
          R.error(ResultCodeEnum.UNAUTHORIZED, ResultMessageEnum.UNAUTHORIZED),
        );
      return;
    }

    response
      .status(status)
      .json(
        R.error(
          ResultCodeEnum.INTERNAL_SERVER_ERROR,
          ResultMessageEnum.INTERNAL_SERVER_ERROR,
        ),
      );
  }
}
