import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StatusDto } from "./dtos/status.dto";
import { StatusEntity } from "./entities/status.entity";

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(StatusEntity) private readonly statusRepository: Repository<StatusEntity>
  ) {}

  async createStatus(input: StatusDto): Promise<StatusEntity> {
    const newStatus = await this.statusRepository.create(input)
    return this.statusRepository.save(newStatus)
  }

  async findAll(): Promise<StatusEntity[]> {
    return this.statusRepository.find()
  }

}