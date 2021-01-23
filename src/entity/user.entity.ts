/*
 * @Author: 汤波
 * @Date: 2021-01-21 10:38:08
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-21 14:01:22
 * @FilePath: \nest-tung-base\src\entity\user.entity.ts
 */
import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class UserEntity extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column()
  nickname: string;

  @Column('integer')
  roleId: number;
}
