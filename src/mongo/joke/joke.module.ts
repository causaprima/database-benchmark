import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Joke, JokeSchema } from "./schemas/joke.schema";
import { JokeService } from "./joke.service";
import { JokeResolverMongo } from "./joke.resolver";

@Module({
  imports: [MongooseModule.forFeature([
    {name: Joke.name, schema: JokeSchema}
  ])],
  providers: [JokeService, JokeResolverMongo]
})
export class JokeModule {}