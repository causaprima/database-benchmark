import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { JokeService } from "./joke.service";
import { JokeTypePostgres } from "./types/joke.type";
import { CreateJokeInputPostgres } from "./inputs/create-joke.input";

@Resolver()
export class JokeResolverPostgres {
  constructor(private jokeService: JokeService) {}

  @Mutation(() => JokeTypePostgres)
  async createJokePostgres(@Args('input') input: CreateJokeInputPostgres): Promise<JokeTypePostgres> {
    return await this.jokeService.createJoke(input)
  }

  @Query(() => [JokeTypePostgres])
  async jokesPostgres(): Promise<JokeTypePostgres[]> {
    return await this.jokeService.findAll()
  }

}