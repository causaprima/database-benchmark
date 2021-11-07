import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JokeEntity } from "./entities/joke.entity";
import { JokeService } from "./joke.service";
import { JokeResolverPostgres } from "./joke.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JokeEntity
    ])
  ],
  providers: [JokeService, JokeResolverPostgres],
  exports: []
})
export class JokeModule {}