import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RoleDto } from "./dtos/role.dto";
import { Role, RoleDocument } from "./schemas/role.schema";

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async createRole(input: RoleDto): Promise<Role> {
    const newStatus = new this.roleModel(input)
    return await newStatus.save()
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.find().populate('users')
  }
}