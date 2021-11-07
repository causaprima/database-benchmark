import { Field, ID, ObjectType } from "@nestjs/graphql";
import { GroupTypeMongo } from "../../group/types/group.type";

@ObjectType()
export class LevelTypeMongo {
  @Field(() => ID)
  id?: string

  @Field()
  name: string

  @Field(() => GroupTypeMongo, {nullable: true})
  group?: GroupTypeMongo
}