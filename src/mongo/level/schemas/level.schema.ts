import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type LevelDocument = Level & Document

@Schema()
export class Level {
  @Prop({required: true})
  name: string
}

export const LevelSchema = SchemaFactory.createForClass(Level)

LevelSchema.virtual('group', {
  ref: 'Group',
  localField: '_id',
  foreignField: 'levelId',
  justOne: true
})