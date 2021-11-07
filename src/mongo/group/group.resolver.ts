import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateGroupInputMongo } from "./inputs/create-group.input";
import { GroupTypeMongo } from "./types/group.type";
import { GroupService } from "./group.service";

@Resolver()
export class GroupResolverMongo {
  constructor(private groupService: GroupService) {}

  @Mutation(() => GroupTypeMongo)
  async createGroupMongo(@Args('input') input: CreateGroupInputMongo): Promise<GroupTypeMongo> {
    return await this.groupService.createGroup(input)
  }

  @Query(() => [GroupTypeMongo])
  async groupsMongo(): Promise<GroupTypeMongo[]> {
    return await this.groupService.findAll()
  }
}