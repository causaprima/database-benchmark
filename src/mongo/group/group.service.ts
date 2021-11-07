import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GroupDto } from "./dtos/group.dto";
import { Group, GroupDocument } from "./schemas/group.schema";

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group.name) private groupModel: Model<GroupDocument>) {}

  async createGroup(input: GroupDto): Promise<Group> {
    const newGroup = new this.groupModel(input)
    return await newGroup.save()
  }

  async findAll(): Promise<Group[]> {
    return await this.groupModel.find().populate(['level'])
      .populate({path: 'userInGroup', populate: {path: 'user'}}).exec()
  }
}