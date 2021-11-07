import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LevelEntity } from "./entities/level.entity";
import { Repository } from "typeorm";
import { LevelDto } from "./dtos/level.dto";

@Injectable()
export class LevelService {
  constructor(@InjectRepository(LevelEntity) private readonly levelRepository: Repository<LevelEntity>) {}

  async createLevel(input: LevelDto): Promise<LevelEntity> {
    const newLevel = this.levelRepository.create(input)
    return this.levelRepository.save(newLevel)
  }

  async findAll(): Promise<LevelEntity[]> {
    return this.levelRepository.find({relations: ['group']})
  }
}