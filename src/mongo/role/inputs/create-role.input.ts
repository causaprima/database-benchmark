import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoleInputMongo {
  @Field()
  name: string
}