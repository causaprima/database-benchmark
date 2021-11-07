import { Field, ID, ObjectType } from "@nestjs/graphql";
import { LevelTypeMongo } from "../../level/types/level.type";
import { UserInGroupTypeMongo } from "../../userInGroup/types/userInGroup.type";

@ObjectType()
export class GroupTypeMongo {
  @Field(() => ID)
  id?: string

  @Field()
  name: string

  @Field({nullable: true})
  shortname?: string

  @Field()
  levelId: string

  @Field(() => LevelTypeMongo)
  level?: LevelTypeMongo

  @Field(type => [UserInGroupTypeMongo])
  userInGroup?: UserInGroupTypeMongo[]
}