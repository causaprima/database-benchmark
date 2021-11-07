import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateGroupInputPostgres } from "./inputs/create-group.input";
import { GroupTypePostgres } from "./types/group.type";
import { GroupService } from "./group.service";

@Resolver()
export class GroupResolverPostgres {
  constructor(private groupService: GroupService) {}

  @Mutation(() => GroupTypePostgres)
  async createGroupPostgres(@Args('input') input: CreateGroupInputPostgres): Promise<GroupTypePostgres> {
    return await this.groupService.createGroup(input)
  }

  @Query(() => [GroupTypePostgres])
  async groupsPostgres(): Promise<GroupTypePostgres[]> {
    return await this.groupService.findAll()
  }
}