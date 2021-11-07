import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInGroupInputMongo {
  @Field()
  userId: string

  @Field()
  groupId: string
}