import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInGroupInputPostgres {
  @Field()
  userId: string

  @Field()
  groupId: string
}