import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./dtos/user.dto";
import { RoleService } from "../role/role.service";
import { StatusService } from "../status/status.service";

@Injectable()
export class UserService {
  constructor(
    private readonly roleService: RoleService,
    private readonly statusService: StatusService,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(input: UserDto): Promise<UserEntity> {
    const newUser = await this.userRepository.create(input)

    return this.userRepository.save(newUser)
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find({relations: ['status', 'role', 'jokes', 'userInGroup']})
  }
}