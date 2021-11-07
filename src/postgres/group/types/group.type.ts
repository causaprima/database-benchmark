import { Field, ObjectType } from "@nestjs/graphql";
import { LevelTypePostgres } from "../../level/types/level.type";
import { UserInGroupTypePostgres } from "../../userInGroup/types/userInGroup.type";

@ObjectType()
export class GroupTypePostgres {
  @Field()
  id: string

  @Field()
  name: string

  @Field({nullable: true})
  shortname?: string

  @Field()
  levelId: string

  @Field(() => LevelTypePostgres, {nullable: true})
  level: LevelTypePostgres

  @Field(() => [UserInGroupTypePostgres])
  userInGroup: UserInGroupTypePostgres[]
}