import { Field, ObjectType } from "@nestjs/graphql";
import { UserTypePostgres } from "../../user/types/user.type";
import { GroupTypePostgres } from "../../group/types/group.type";

@ObjectType()
export class UserInGroupTypePostgres {
  @Field()
  id: string

  @Field()
  userId: string

  @Field(type => UserTypePostgres)
  user: Promise<UserTypePostgres>

  @Field()
  groupId: string

  @Field(type => GroupTypePostgres)
  group: Promise<GroupTypePostgres>

  @Field()
  createdAt: Date

  @Field()
  deletedAt: Date
}