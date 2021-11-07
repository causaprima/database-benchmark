import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateGroupInputMongo {
  @Field()
  name: string

  @Field({nullable: true})
  shortname?: string

  @Field()
  levelId: string
}