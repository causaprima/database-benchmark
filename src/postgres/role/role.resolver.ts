import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRoleInputPostgres } from "./inputs/create-role.input";
import { RoleService } from "./role.service";
import { RoleTypePostgres } from "./types/role.type";

@Resolver((of) => RoleTypePostgres)
export class RoleResolverPostgres {
  constructor(
    private roleService: RoleService,
  ) {}

  @Mutation(() => RoleTypePostgres)
  async createRolePostgres(@Args('input') input: CreateRoleInputPostgres): Promise<RoleTypePostgres> {
    return await this.roleService.createRole(input)
  }

  @Query(returns => [RoleTypePostgres])
  async rolesPostgres(): Promise<RoleTypePostgres[]> {
    return await this.roleService.findAll()
  }
}