import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LevelDto } from "./dtos/level.dto";
import { Level, LevelDocument } from "./schemas/level.schema";

@Injectable()
export class LevelService {
  constructor(@InjectModel(Level.name) private levelModel: Model<LevelDocument>) {}

  async createLevel(input: LevelDto): Promise<Level> {
    const newLevel = new this.levelModel(input)
    return await newLevel.save()
  }

  async findAll(): Promise<Level[]> {
    return this.levelModel.find().populate('group')
  }
}