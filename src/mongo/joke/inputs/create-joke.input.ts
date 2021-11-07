import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateJokeInputMongo {
  @Field()
  name: string

  @Field()
  text: string

  @Field()
  userId: string
}