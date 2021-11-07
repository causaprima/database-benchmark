import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { GroupEntity } from "../../group/entities/group.entity";

export const USER_IN_GROUP_TABLE_NAME = 'user_in_group'

@Entity(USER_IN_GROUP_TABLE_NAME)
export class UserInGroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  userId: string

  @ManyToOne(() => UserEntity, user => user.userInGroup)
  user: Promise<UserEntity>

  @Column()
  groupId: string

  @ManyToOne(() => GroupEntity, group => group.userInGroup)
  group: Promise<GroupEntity>

  @CreateDateColumn({type: 'timestamptz'})
  createdAt!: Date

  @DeleteDateColumn({type: 'timestamptz'})
  deletedAt!: Date
}