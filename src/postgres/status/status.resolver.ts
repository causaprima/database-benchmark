import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StatusTypePostgres } from "./types/status.type";
import { CreateStatusInputPostgres } from "./inputs/create-status.input";
import { StatusService } from "./status.service";

@Resolver((of) => StatusTypePostgres)
export class StatusResolverPostgres {
  constructor(
    private statusService: StatusService,
  ) {}

  @Mutation(() => StatusTypePostgres)
  async createStatusPostgres(@Args('input') input: CreateStatusInputPostgres): Promise<StatusTypePostgres> {
    return await this.statusService.createStatus(input)
  }

  @Query(returns => [StatusTypePostgres])
  async statusesPostgres(): Promise<StatusTypePostgres[]> {
    return await this.statusService.findAll()
  }
}