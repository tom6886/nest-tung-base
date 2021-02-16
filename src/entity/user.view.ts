/*
 * @Author: 汤波
 * @Date: 2021-02-16 21:18:41
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-02-16 21:23:35
 * @FilePath: \nest-tung-base\src\entity\user.view.ts
 */
import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: `SELECT
  a.id AS a_id,
  a.username AS a_username,
  a.nickname AS a_nickname,
  b.nickname AS creator,
  c.nickname AS modifier,
  a.role_id AS roleId
  FROM dp_user a
  LEFT JOIN dp_user b ON a.user_create=b.id
  LEFT JOIN dp_user c ON a.user_modified=c.id`,
})
export class UserView {
  @ViewColumn()
  id: string;

  @ViewColumn()
  nickname: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  roleId: string;

  @ViewColumn()
  creator: string;

  @ViewColumn()
  modifier: string;
}
