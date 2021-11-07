import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LevelEntity } from "../../level/entities/level.entity";
import { UserInGroupEntity } from "../../userInGroup/entities/userInGroup.entity";

export const GROUP_TABLE_NAME = 'groups'

@Entity(GROUP_TABLE_NAME)
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({nullable: true})
  shortname: string

  @Column()
  levelId: string

  @OneToOne(() => LevelEntity, level => level.group)
  @JoinColumn()
  level: LevelEntity

  @OneToMany(() => UserInGroupEntity, userInGroup => userInGroup.group)
  userInGroup: UserInGroupEntity[]
}