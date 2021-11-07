import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserTypeMongo } from "../../user/types/user.type";

@ObjectType()
export class JokeTypeMongo {
  @Field(() => ID)
  id?: string

  @Field()
  name: string

  @Field()
  text: string

  @Field({defaultValue: 0})
  rate?: number

  @Field({defaultValue: 0})
  like?: number

  @Field({defaultValue: 0})
  view?: number

  @Field()
  userId: string

  @Field(() => UserTypeMongo)
  user?: UserTypeMongo
}