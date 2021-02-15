/*
 * @Author: 汤波
 * @Date: 2021-02-03 14:16:59
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-15 11:13:47
 * @FilePath: \nest-tung-base\src\config\config.service.local.ts
 */
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export default class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: {
    [key: string]: string;
  }): { [key: string]: string } {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      PORT: Joi.number().default(80),
      PREFIX: Joi.string().default('api'),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get(key: string) {
    return this.envConfig[key];
  }

  /**
   * get launch port
   */
  public getPort(): number {
    return Number(this.envConfig.PORT);
  }

  /**
   * get launch port
   */
  public getPrefix(): string {
    return this.envConfig.PREFIX;
  }
}
