/*
 * @Author: 汤波
 * @Date: 2021-01-19 14:46:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-28 11:02:14
 * @FilePath: \nest-tung-base\src\main.ts
 */
import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { initSwagger } from './config/swagger.config';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { HttpException } from '@nestjs/common';
import { ResultCodeEnum } from './enum/result-code.enum';
import { AuthGuard } from './auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 给请求添加prefix
  app.setGlobalPrefix(AppModule.prefix);

  // 转发所有以 api 开头的请求
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
    }),
  );

  // 使用helmet全部功能，防止Web漏洞
  app.use(helmet());
  //增加验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors = []) => {
        throw new HttpException(
          {
            code: ResultCodeEnum.PARAM_ERROR,
            message: Object.values(validationErrors[0].constraints)[0],
          },
          HttpStatus.OK,
        );
      },
    }),
  );

  // 全局注册错误的过滤器(错误异常)
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局注册权限守卫管道
  const jwtService = app.get<JwtService>(JwtService);
  app.useGlobalGuards(new AuthGuard(AppModule.prefix, jwtService));

  // 初始化swagger
  initSwagger(app);

  await app.listen(AppModule.port, () => {
    Logger.log(
      `服务已经启动,请访问:http://wwww.localhost:${AppModule.port}/${AppModule.prefix}`,
    );
  });
}
bootstrap().catch((e) => Logger.error('错误', e));
