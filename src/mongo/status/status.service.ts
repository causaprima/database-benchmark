import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Status, StatusDocument } from "./schemas/status.schema";
import { StatusDto } from "./dtos/status.dto";

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status.name) private statusModel: Model<StatusDocument>) {}

  async createStatus(input: StatusDto): Promise<Status> {
    const newStatus = new this.statusModel(input)
    return await newStatus.save()
  }

  async findAll(): Promise<Status[]> {
    return await this.statusModel.find().populate('users').exec()
  }
}