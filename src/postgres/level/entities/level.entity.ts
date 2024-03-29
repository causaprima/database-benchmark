import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GroupEntity } from "../../group/entities/group.entity";

export const LEVEL_TABLE_NAME = 'levels'

@Entity(LEVEL_TABLE_NAME)
export class LevelEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToOne(() => GroupEntity, group => group.level)
  group: GroupEntity
}