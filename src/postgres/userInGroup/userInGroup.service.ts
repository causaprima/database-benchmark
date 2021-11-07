import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserInGroupEntity } from "./entities/userInGroup.entity";
import { Repository } from "typeorm";
import { UserInGroupDto } from "./dtos/userInGroup.dto";
import { UserService } from "../user/user.service";
import { GroupService } from "../group/group.service";

@Injectable()
export class UserInGroupService {
  constructor(
    private readonly userService: UserService,
    private readonly groupService: GroupService,
    @InjectRepository(UserInGroupEntity) private readonly userInGroupRepository: Repository<UserInGroupEntity>
  ) {}

  async createUserInGroup(input: UserInGroupDto): Promise<UserInGroupEntity> {
    const newUserInGroup = this.userInGroupRepository.create(input)
    return this.userInGroupRepository.save(newUserInGroup)
  }

  async findAll(): Promise<UserInGroupEntity[]> {
    return this.userInGroupRepository.find({relations: ['group', 'user']})
  }
}