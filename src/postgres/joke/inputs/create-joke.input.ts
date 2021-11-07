import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateJokeInputPostgres {
  @Field()
  name: string

  @Field()
  text: string

  @Field()
  userId: string
}