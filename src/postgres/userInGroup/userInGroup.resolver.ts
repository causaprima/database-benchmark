import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInGroupService } from "./userInGroup.service";
import { UserInGroupTypePostgres } from "./types/userInGroup.type";
import { CreateUserInGroupInputPostgres } from "./inputs/create-userInGroup.input";

@Resolver()
export class UserInGroupResolverPostgres {
  constructor(private userInGroupService: UserInGroupService) {}

  @Mutation(() => UserInGroupTypePostgres)
  async createUserInGroupPostgres(@Args('input') input: CreateUserInGroupInputPostgres): Promise<UserInGroupTypePostgres> {
    return await this.userInGroupService.createUserInGroup(input)
  }

  @Query(() => [UserInGroupTypePostgres])
  async userInGroupPostgres(): Promise<UserInGroupTypePostgres[]> {
    return this.userInGroupService.findAll()
  }
}