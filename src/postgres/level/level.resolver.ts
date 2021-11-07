import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LevelService } from "./level.service";
import { LevelTypePostgres } from "./types/level.type";
import { CreateLevelInputPostgres } from "./inputs/create-level.input";

@Resolver()
export class LevelResolverPostgres {
  constructor(private levelService: LevelService) {}

  @Mutation(() => LevelTypePostgres)
  async createLevelPostgres(@Args('input') input: CreateLevelInputPostgres): Promise<LevelTypePostgres> {
    return await this.levelService.createLevel(input)
  }

  @Query(() => [LevelTypePostgres])
  async levelsPostgres(): Promise<LevelTypePostgres[]> {
    return await this.levelService.findAll()
  }
}