import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";

export const STATUS_TABLE_NAME = 'statuses'

@Entity(STATUS_TABLE_NAME)
export class StatusEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => UserEntity, user => user.status, {nullable: true})
  users?: UserEntity[]
}