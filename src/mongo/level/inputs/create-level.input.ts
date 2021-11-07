import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateLevelInputMongo {
  @Field()
  name: string
}