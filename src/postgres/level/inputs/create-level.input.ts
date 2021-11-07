import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateLevelInputPostgres {
  @Field()
  name: string
}