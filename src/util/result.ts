import { ResultCodeEnum, ResultMessageEnum } from 'src/enum/result-code.enum';

/*
 * @Author: 汤波
 * @Date: 2021-01-25 17:16:34
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-25 15:14:54
 * @FilePath: \nest-tung-base\src\util\result.ts
 */
export class R {
  code: number;

  message: string;

  data?: any;

  static ok(data?: any): R {
    const r = new R();
    r.code = ResultCodeEnum.SUCCESS;
    r.message = ResultMessageEnum.SUCCESS;
    if (data) {
      r.data = data;
    }
    return r;
  }

  static fail(message?: string) {
    const r = new R();
    r.code = ResultCodeEnum.FAIL;
    r.message = message || ResultMessageEnum.FAIL;
    return r;
  }

  static error(code: number, message: string) {
    const r = new R();
    r.code = code;
    r.message = message;
    return r;
  }

  static data(code?: ResultCodeEnum, message?: string, data?: unknown) {
    const r = new R();
    r.code = code || ResultCodeEnum.SUCCESS;
    r.message = message || ResultMessageEnum.SUCCESS;
    if (data) {
      r.data = data;
    }
    return r;
  }
}
