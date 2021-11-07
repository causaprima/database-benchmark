import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { JokeService } from "./joke.service";
import { JokeTypeMongo } from "./types/joke.type";
import { CreateJokeInputMongo } from "./inputs/create-joke.input";

@Resolver()
export class JokeResolverMongo {
  constructor(private jokeService: JokeService) {}

  @Mutation(() => JokeTypeMongo)
  async createJokeMongo(@Args('input') input: CreateJokeInputMongo): Promise<JokeTypeMongo> {
    return await this.jokeService.createJoke(input)
  }

  @Query(() => [JokeTypeMongo])
  async jokesMongo(): Promise<JokeTypeMongo[]> {
    return await this.jokeService.findAll()
  }
}