import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserTypeMongo } from "../../user/types/user.type";

@ObjectType()
export class StatusTypeMongo {
  @Field(type => ID)
  id?: string

  @Field()
  name: string

  @Field(() => [UserTypeMongo], {nullable: true})
  users?: UserTypeMongo[]
}