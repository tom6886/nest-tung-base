/*
 * @Author: 汤波
 * @Date: 2021-02-03 14:16:59
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-09 11:14:24
 * @FilePath: \nest-tung-base\src\config\config.service.ts
 */
import { Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { TypeormConfig } from 'src/interface/typeorm.interface';

@Injectable()
export default class ConfigService {
  private readonly envConfig: { [key: string]: any };

  private readonly envConfig1: string;

  constructor(config: any) {
    this.envConfig = this.validateInput(config);
    this.envConfig1 = 'test';
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: {
    [key: string]: string;
  }): { [key: string]: string } {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      port: Joi.number().default(80),
      prefix: Joi.string().default('api'),
      typeorm: Joi.object(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  private get(key: string) {
    return this.envConfig[key];
  }

  getPort(): number {
    return Number(this.envConfig.PORT);
  }

  getPrefix(): string {
    return this.envConfig.PREFIX;
  }

  getTypeorm(): TypeormConfig {
    return this.envConfig.typeorm;
  }
}
