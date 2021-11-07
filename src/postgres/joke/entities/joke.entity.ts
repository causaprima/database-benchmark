import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";

export const JOKE_TABLE_NAME = 'jokes'

@Entity(JOKE_TABLE_NAME)
export class JokeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  text: string

  @Column()
  rate?: number = 0

  @Column()
  like?: number = 0

  @Column()
  view?: number = 0

  @Column()
  userId: string

  @ManyToOne(() => UserEntity, user => user.jokes)
  user: UserEntity
}
