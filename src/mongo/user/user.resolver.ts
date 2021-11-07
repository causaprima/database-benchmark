import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StatusTypeMongo } from "../status/types/status.type";
import { CreateUserInputMongo } from "./inputs/create-user.input";
import { UserService } from "./user.service";
import { UserTypeMongo } from "./types/user.type";

@Resolver((of) => StatusTypeMongo)
export class UserResolverMongo {
  constructor(private userService: UserService) {}

  @Mutation(() => UserTypeMongo)
  async createUserMongo(@Args('input') input: CreateUserInputMongo): Promise<UserTypeMongo> {
    return await this.userService.createUser(input)
  }

  @Query(() => [UserTypeMongo])
  async usersMongo(): Promise<UserTypeMongo[]> {
    return await this.userService.findAll()
  }

}