import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StatusTypeMongo } from "../status/types/status.type";
import { RoleService } from "./role.service";
import { RoleTypeMongo } from "./types/role.type";
import { CreateRoleInputMongo } from "./inputs/create-role.input";

@Resolver((of) => StatusTypeMongo)
export class RoleResolverMongo {
  constructor(
    private roleService: RoleService,
  ) {}

  @Mutation(() => RoleTypeMongo)
  async createRoleMongo(@Args('input') input: CreateRoleInputMongo): Promise<RoleTypeMongo> {
    return await this.roleService.createRole(input)
  }

  @Query(returns => [RoleTypeMongo])
  async rolesMongo(): Promise<RoleTypeMongo[]> {
    return await this.roleService.findAll()
  }
}