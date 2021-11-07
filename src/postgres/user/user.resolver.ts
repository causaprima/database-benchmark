import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StatusTypePostgres } from "../status/types/status.type";
import { CreateUserInputPostgres } from "./inputs/create-user.input";
import { UserService } from "./user.service";
import { UserTypePostgres } from "./types/user.type";

@Resolver((of) => StatusTypePostgres)
export class UserResolverPostgres {
  constructor(private userService: UserService) {}

  @Mutation(() => UserTypePostgres)
  async createUserPostgres(@Args('input') input: CreateUserInputPostgres): Promise<UserTypePostgres> {
    return await this.userService.createUser(input)
  }

  @Query(() => [UserTypePostgres])
  async usersPostgres(): Promise<UserTypePostgres[]> {
    return await this.userService.findAll()
  }
}