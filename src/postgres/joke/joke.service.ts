import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JokeEntity } from "./entities/joke.entity";
import { Repository } from "typeorm";
import { JokeDto } from "./dtos/joke.dto";

@Injectable()
export class JokeService {
  constructor(@InjectRepository(JokeEntity) private readonly jokeRepository: Repository<JokeEntity>) {}

  async createJoke(input: JokeDto): Promise<JokeEntity> {
    const newJoke = this.jokeRepository.create(input)
    return this.jokeRepository.save(newJoke)
  }

  async findAll(): Promise<JokeEntity[]> {
    return this.jokeRepository.find({relations: ['user']})
  }
}