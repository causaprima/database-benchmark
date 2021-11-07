import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GroupDocument = Group & Document

@Schema()
export class Group {
  @Prop({required: true})
  name: string

  @Prop()
  shortname?: string

  @Prop({required: true})
  levelId: string
}

export const GroupSchema = SchemaFactory.createForClass(Group)

GroupSchema.virtual('level', {
  ref: 'Level',
  localField: 'levelId',
  foreignField: '_id',
  justOne: true
})

GroupSchema.virtual('userInGroup', {
  ref: 'UserInGroup',
  localField: '_id',
  foreignField: 'groupId',
})