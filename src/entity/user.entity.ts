/*
 * @Author: 汤波
 * @Date: 2021-01-21 10:38:08
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 19:15:38
 * @FilePath: \nest-tung-base\src\entity\user.entity.ts
 */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('dp_user')
export class UserEntity extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column()
  nickname: string;

  @Column({ name: 'role_id' })
  roleId: number;
}
