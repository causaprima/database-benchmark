import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GroupEntity } from "./entities/group.entity";
import { Repository } from "typeorm";
import { GroupDto } from "./dtos/group.dto";
import { LevelService } from "../level/level.service";

@Injectable()
export class GroupService {
  constructor(
    private readonly levelService: LevelService,
    @InjectRepository(GroupEntity) private readonly groupRepository: Repository<GroupEntity>
  ) {}

  async createGroup(input: GroupDto): Promise<GroupEntity> {
    const newGroup = this.groupRepository.create(input)
    return this.groupRepository.save(newGroup)
  }

  async findAll(): Promise<GroupEntity[]> {
    return this.groupRepository.find({relations: ['level', 'userInGroup']})
  }
}