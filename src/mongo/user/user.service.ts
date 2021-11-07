import { Injectable } from "@nestjs/common";
import { User, UserDocument } from "./schemas/user.schema";
import { UserDto } from "./dtos/user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(input: UserDto): Promise<User> {
    const newUser = new this.userModel(input)
    return await newUser.save()
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().populate(['status', 'role', 'jokes'])
      .populate({path: 'userInGroup', populate: {path: 'group'}}).exec()
  }
}