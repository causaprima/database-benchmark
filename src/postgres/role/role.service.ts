import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleDto } from "./dtos/role.dto";
import { RoleEntity } from "./entities/role.entity";

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async createRole(input: RoleDto): Promise<RoleEntity> {
    const newRole = await this.roleRepository.create(input)
    return this.roleRepository.save(newRole)
  }

  async findAll(): Promise<RoleEntity[]> {
    return this.roleRepository.find()
  }
}