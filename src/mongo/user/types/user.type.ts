import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StatusTypeMongo } from "../../status/types/status.type";
import { RoleTypeMongo } from "../../role/types/role.type";
import { JokeTypeMongo } from "../../joke/types/joke.type";
import { UserInGroupTypeMongo } from "../../userInGroup/types/userInGroup.type";

@ObjectType()
export class UserTypeMongo {
  @Field(() => ID)
  id?: string

  @Field({nullable: true})
  name?: string

  @Field({nullable: true})
  surname?: string

  @Field()
  login: string

  @Field()
  password: string

  @Field()
  createdAt: Date

  @Field()
  deletedAt?: Date

  @Field()
  statusId: string

  @Field(() => StatusTypeMongo)
  status?: StatusTypeMongo

  @Field({nullable: true})
  roleId?: string

  @Field(() => RoleTypeMongo, {nullable: true})
  role?: RoleTypeMongo

  @Field(() => [JokeTypeMongo], {nullable: true})
  jokes?: JokeTypeMongo[]

  @Field(type => [UserInGroupTypeMongo], {nullable: true})
  userInGroup?: UserInGroupTypeMongo[]
}