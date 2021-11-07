import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInputMongo {

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