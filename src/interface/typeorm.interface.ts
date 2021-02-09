/*
 * @Author: 汤波
 * @Date: 2021-02-09 10:09:49
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-09 10:21:33
 * @FilePath: \nest-tung-base\src\interface\typeorm.interface.ts
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
