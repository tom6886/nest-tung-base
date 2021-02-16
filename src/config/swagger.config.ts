/*
 * @Author: 汤波
 * @Date: 2021-02-03 09:19:12
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 17:11:34
 * @FilePath: \nest-tung-base\src\config\swagger.config.ts
 */

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';

const config = new DocumentBuilder()
  .setTitle('nest framework  api文档')
  .setDescription('nest framework  api接口文档')
  .setVersion('1.0')
  .build();

export const initSwagger = (app: any) => {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${AppModule.prefix}/docs`, app, document);
};
