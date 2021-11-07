import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { User } from "../../user/schemas/user.schema";

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({required: true})
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role)

RoleSchema.virtual('users', {
  ref: 'User',
  localField: '_id',
  foreignField: 'roleId'
})