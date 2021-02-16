/*
 * @Author: 汤波
 * @Date: 2021-01-21 10:14:46
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 19:30:45
 * @FilePath: \nest-tung-base\src\entity\base.entity.ts
 */
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'gmt_create' })
  gmtCreate: Date;

  @Column({ name: 'gmt_modified' })
  gmtModified: Date;

  @Column({ name: 'user_create' })
  userCreate: number;

  @Column({ name: 'user_modified' })
  userModified: number;
}
