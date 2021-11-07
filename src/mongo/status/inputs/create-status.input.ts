import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateStatusInputMongo {
  @Field()
  name: string
}