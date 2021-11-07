import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserTypeMongo } from "../../user/types/user.type";
import { GroupTypeMongo } from "../../group/types/group.type";

@ObjectType()
export class UserInGroupTypeMongo {
  @Field(() => ID)
  id?: string

  @Field()
  userId: string

  @Field(type => UserTypeMongo)
  user?: UserTypeMongo

  @Field()
  groupId: string

  @Field(type => GroupTypeMongo)
  group?: GroupTypeMongo

  @Field()
  createdAt: Date

  @Field()
  deletedAt?: Date
}