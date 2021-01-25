/*
 * @Author: 汤波
 * @Date: 2021-01-21 10:38:08
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-25 17:11:28
 * @FilePath: \nest-tung-base\src\entity\user.entity.ts
 */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('tc_user')
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
