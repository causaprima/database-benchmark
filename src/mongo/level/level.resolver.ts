import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LevelService } from "./level.service";
import { LevelTypeMongo } from "./types/level.type";
import { CreateLevelInputMongo } from "./inputs/create-level.input";

@Resolver()
export class LevelResolverMongo {
  constructor(private levelService: LevelService) {}

  @Mutation(() => LevelTypeMongo)
  async createLevelMongo(@Args('input') input: CreateLevelInputMongo): Promise<LevelTypeMongo> {
    return await this.levelService.createLevel(input)
  }

  @Query(() => [LevelTypeMongo])
  async levelsMongo(): Promise<LevelTypeMongo[]> {
    return await this.levelService.findAll()
  }
}