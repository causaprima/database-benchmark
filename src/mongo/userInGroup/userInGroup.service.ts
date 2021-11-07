import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserInGroupDto } from "./dtos/userInGroup.dto";
import { UserInGroup, UserInGroupDocument } from "./schemas/userInGroup.schema";
import { Model } from "mongoose";

@Injectable()
export class UserInGroupService {
  constructor(@InjectModel(UserInGroup.name) private userInGroupModel: Model<UserInGroupDocument>) {}

  async createUserInGroup(input: UserInGroupDto): Promise<UserInGroup> {
    const newUserInGroup = new this.userInGroupModel(input)
    return newUserInGroup.save()
  }

  async findAll(): Promise<UserInGroup[]> {
    return this.userInGroupModel.find().populate(['user', 'group'])
  }
}