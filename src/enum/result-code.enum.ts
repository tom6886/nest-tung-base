/*
 * @Author: 汤波
 * @Date: 2021-01-25 17:30:39
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-27 10:24:37
 * @FilePath: \nest-tung-base\src\enum\result-code.enum.ts
 */
export enum ResultCodeEnum {
  SUCCESS = 200,
  FAIL = 201,
  UNKNOWN_ERROR = 202,
  UNAUTHORIZED = 401,
  TOKEN_EXPIRED = 402,
  NOT_FOUND = 404,
  PARAM_ERROR = 410,
  SIGNATURE_NOT_MATCH = 412,
  ILLEGAL_REQUEST = 413,
  INTERNAL_SERVER_ERROR = 500,
  SERVER_BUSY = 503,
}

export enum ResultMessageEnum {
  SUCCESS = '成功',
  FAIL = '失败',
  UNKNOWN_ERROR = '未知错误',
  UNAUTHORIZED = '未授权',
  TOKEN_EXPIRED = 'token过期',
  NOT_FOUND = '参数错误',
  PARAM_ERROR = '请求的数据格式不符',
  SIGNATURE_NOT_MATCH = '请求的数字签名不匹配',
  ILLEGAL_REQUEST = '非法请求',
  INTERNAL_SERVER_ERROR = '服务器内部错误',
  SERVER_BUSY = '服务器正忙，请稍后再试',
}
