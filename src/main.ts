/*
 * @Author: 汤波
 * @Date: 2021-01-19 14:46:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-09 10:36:56
 * @FilePath: \nest-tung-base\src\main.ts
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { initSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 给请求添加prefix
  app.setGlobalPrefix(AppModule.prefix);
  // 使用helmet全部功能，防止Web漏洞
  app.use(helmet());
  // 初始化swagger
  initSwagger(app);

  console.log(AppModule);
  await app.listen(AppModule.port);
}
bootstrap().catch((e) => Logger.error('错误', e));
