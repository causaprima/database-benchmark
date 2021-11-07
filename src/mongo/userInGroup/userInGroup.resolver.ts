import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInGroupTypeMongo } from "./types/userInGroup.type";
import { UserInGroupService } from "./userInGroup.service";
import { CreateUserInGroupInputMongo } from "./inputs/create-userInGroup.input";

@Resolver()
export class UserInGroupResolverMongo {
  constructor(private userInGroupService: UserInGroupService) {}

  @Mutation(() => UserInGroupTypeMongo)
  async createUserInGroupMongo(@Args('input') input: CreateUserInGroupInputMongo): Promise<UserInGroupTypeMongo> {
    return await this.userInGroupService.createUserInGroup(input)
  }

  @Query(() => [UserInGroupTypeMongo])
  async userInGroupMongo(): Promise<UserInGroupTypeMongo[]> {
    return this.userInGroupService.findAll()
  }
}