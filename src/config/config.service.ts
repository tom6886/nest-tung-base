/*
 * @Author: 汤波
 * @Date: 2021-02-03 14:16:59
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-23 13:07:38
 * @FilePath: \nest-tung-base\src\config\config.service.ts
 */
import * as Joi from 'joi';
import { TypeormConfig, JwtConfig } from 'src/interface/config.interface';

export default class ConfigService {
  private readonly envConfig: { [key: string]: any };

  constructor(config: any) {
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: {
    [key: string]: any;
  }): { [key: string]: any } {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      port: Joi.number().default(80),
      prefix: Joi.string().default('api'),
      typeorm: Joi.object(),
      jwt: Joi.object(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  public getPort(): number {
    return this.envConfig.port;
  }

  public getPrefix(): string {
    return this.envConfig.prefix;
  }

  public getTypeorm(): TypeormConfig {
    return this.envConfig.typeorm;
  }

  public getJwt(): JwtConfig {
    console.log(this.envConfig.jwt);
    return this.envConfig.jwt;
  }
}
