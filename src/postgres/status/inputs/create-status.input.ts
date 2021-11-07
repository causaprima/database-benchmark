import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateStatusInputPostgres {
  @Field()
  name: string
}