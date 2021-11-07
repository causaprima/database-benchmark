import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { StatusTypeMongo } from "./types/status.type";
import { CreateStatusInputMongo } from "./inputs/create-status.input";
import { StatusService } from "./status.service";

@Resolver((of) => StatusTypeMongo)
export class StatusResolverMongo {
  constructor(
    private statusService: StatusService,
  ) {}

  @Mutation(() => StatusTypeMongo)
  async createStatusMongo(@Args('input') input: CreateStatusInputMongo): Promise<StatusTypeMongo> {
    return await this.statusService.createStatus(input)
  }

  @Query(returns => [StatusTypeMongo])
  async statusesMongo(): Promise<StatusTypeMongo[]> {
    return await this.statusService.findAll()
  }
}