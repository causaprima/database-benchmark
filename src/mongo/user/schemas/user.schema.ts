import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  name?: string

  @Prop()
  surname?: string

  @Prop({required: true})
  login: string

  @Prop({required: true})
  password: string

  @Prop({default: Date.now()})
  createdAt: Date

  @Prop()
  deletedAt?: Date

  @Prop()
  statusId: string

  @Prop()
  roleId?: string

  // @Prop({ type: [{type: MongooseSchema.Types.ObjectId, ref: UserInGroup.name}] })
  // userInGroups?: MongooseSchema.Types.ObjectId[]
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.virtual('status', {
  ref: 'Status',
  localField: 'statusId',
  foreignField: '_id',
  justOne: true
})

UserSchema.virtual('role', {
  ref: 'Role',
  localField: 'roleId',
  foreignField: '_id',
  justOne: true
})

UserSchema.virtual('jokes', {
  ref: 'Joke',
  localField: '_id',
  foreignField: 'userId',
})

UserSchema.virtual('userInGroup', {
  ref: 'UserInGroup',
  localField: '_id',
  foreignField: 'userId',
})