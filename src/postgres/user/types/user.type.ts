import { Field, ObjectType } from "@nestjs/graphql";
import { StatusTypePostgres } from "../../status/types/status.type";
import { RoleTypePostgres } from "../../role/types/role.type";
import { JokeTypePostgres } from "../../joke/types/joke.type";
import { UserInGroupTypePostgres } from "../../userInGroup/types/userInGroup.type";

@ObjectType()
export class UserTypePostgres {
  @Field()
  id: string

  @Field({nullable: true})
  name: string

  @Field({nullable: true})
  surname: string

  @Field()
  login: string

  @Field()
  password: string

  @Field()
  createdAt: Date

  @Field()
  deletedAt: Date

  @Field()
  statusId: string

  @Field(type => StatusTypePostgres)
  status: StatusTypePostgres

  @Field({nullable: true})
  roleId?: string

  @Field(type => RoleTypePostgres, {nullable: true})
  role?: RoleTypePostgres

  @Field(type => [JokeTypePostgres], {nullable: true})
  jokes?: JokeTypePostgres[]

  @Field(type => [UserInGroupTypePostgres])
  public userInGroup!: UserInGroupTypePostgres[]
}