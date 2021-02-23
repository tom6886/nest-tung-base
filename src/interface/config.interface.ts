/*
 * @Author: 汤波
 * @Date: 2021-02-09 10:09:49
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 11:21:47
 * @FilePath: \nest-tung-base\src\interface\config.interface.ts
 */
export interface TypeormConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  timezone?: string;
  charset?: string;
  multipleStatements?: boolean;
  dropSchema?: boolean;
  synchronize?: boolean;
  logging?: boolean;
}

export interface JwtConfig {
  secret: string;
  expiresIn: number;
}
