import { Field, ObjectType } from "@nestjs/graphql";
import { GroupTypePostgres } from "../../group/types/group.type";

@ObjectType()
export class LevelTypePostgres {
  @Field()
  id: string

  @Field()
  name: string

  @Field(() => GroupTypePostgres, {nullable: true})
  group?: GroupTypePostgres
}