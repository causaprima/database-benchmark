import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../user/schemas/user.schema";
import { Group } from "../../group/schemas/group.schema";

export type UserInGroupDocument = UserInGroup & Document

@Schema()
export class UserInGroup {
  @Prop({required: true})
  userId: string

  @Prop({required: true})
  groupId: string

  @Prop({default: Date.now()})
  createdAt: Date

  @Prop()
  deletedAt?: Date
}

export const UserInGroupSchema = SchemaFactory.createForClass(UserInGroup)

UserInGroupSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
})

UserInGroupSchema.virtual('group', {
  ref: 'Group',
  localField: 'groupId',
  foreignField: '_id',
  justOne: true
})