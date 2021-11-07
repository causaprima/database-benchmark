import { Field, ObjectType } from "@nestjs/graphql";
import { UserTypePostgres } from "../../user/types/user.type";

@ObjectType()
export class RoleTypePostgres {
  @Field()
  id: string

  @Field()
  name: string

  @Field(type => [UserTypePostgres!], {nullable: true})
  users?: UserTypePostgres[]
}