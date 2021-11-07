import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInputPostgres {

  @Field({nullable: true})
  name: string

  @Field({nullable: true})
  surname: string

  @Field()
  login: string

  @Field()
  password: string

  @Field()
  statusId: string

  @Field({nullable: true})
  roleId?: string
}