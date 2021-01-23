/*
 * @Author: 汤波
 * @Date: 2021-01-21 10:14:46
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-01-21 10:39:38
 * @FilePath: \nest-tung-base\src\entity\base.entity.ts
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  gmtCreate: Date;

  @Column('date')
  gmtModified: Date;

  @Column('long')
  userCreate: number;

  @Column('long')
  userModified: number;
}
