import { Field, ObjectType } from "@nestjs/graphql";
import { UserTypePostgres } from "../../user/types/user.type";

@ObjectType()
export class JokeTypePostgres {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  text: string

  @Field()
  rate?: number = 0

  @Field()
  like?: number = 0

  @Field()
  view?: number = 0

  @Field()
  userId: string

  @Field(type => UserTypePostgres)
  user: UserTypePostgres
}