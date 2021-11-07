import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "src/mongo/user/schemas/user.schema";

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop({required: true})
  name: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status)

StatusSchema.virtual('users', {
  ref: 'User',
  localField: '_id',
  foreignField: 'statusId'
})