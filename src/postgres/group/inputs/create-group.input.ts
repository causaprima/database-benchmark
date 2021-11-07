import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateGroupInputPostgres {
  @Field()
  name: string

  @Field({nullable: true})
  shortname?: string

  @Field()
  levelId: string
}