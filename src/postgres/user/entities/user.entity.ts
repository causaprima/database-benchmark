import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, ManyToOne, OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { StatusEntity } from "../../status/entities/status.entity";
import { RoleEntity } from "../../role/entities/role.entity";
import { JokeEntity } from "../../joke/entities/joke.entity";
import { UserInGroupEntity } from "../../userInGroup/entities/userInGroup.entity";

export const USER_TABLE_NAME = 'users'

@Entity(USER_TABLE_NAME)
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({nullable: true})
  name: string

  @Column({nullable: true})
  surname: string

  @Column()
  login: string

  @Column()
  password: string

  @CreateDateColumn({type: 'timestamptz'})
  createdAt: Date

  @DeleteDateColumn({type: 'timestamptz'})
  deletedAt: Date

  @Column()
  statusId: string

  @ManyToOne(() => StatusEntity, status => status.users)
  status: StatusEntity

  @Column({nullable: true})
  roleId?: string

  @ManyToOne(() => RoleEntity, role => role.users, {nullable: true})
  role?: RoleEntity

  @OneToMany(() => JokeEntity, joke => joke.user, {nullable: true})
  jokes: JokeEntity[]

  @OneToMany(() => UserInGroupEntity, userInGroup => userInGroup.user)
  userInGroup: UserInGroupEntity[]
}