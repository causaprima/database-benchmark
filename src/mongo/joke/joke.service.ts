import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JokeDto } from "./dtos/joke.dto";
import { Joke, JokeDocument } from "./schemas/joke.schema";

@Injectable()
export class JokeService {
  constructor(@InjectModel(Joke.name) private jokeModel: Model<JokeDocument>) {}

  async createJoke(input: JokeDto): Promise<Joke> {
    const newJoke = new this.jokeModel(input)
    return await newJoke.save()
  }

  async findAll(): Promise<Joke[]> {
    return await this.jokeModel.find().populate('user').exec()
  }
}