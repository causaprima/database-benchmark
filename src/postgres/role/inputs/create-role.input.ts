import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoleInputPostgres {
  @Field()
  name: string
}