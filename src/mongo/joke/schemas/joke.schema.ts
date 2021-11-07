import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type JokeDocument = Joke & Document

@Schema()
export class Joke {
  @Prop()
  name: string

  @Prop()
  text: string

  @Prop({default: 0})
  rate?: number

  @Prop({default: 0})
  like?: number

  @Prop({default: 0})
  view?: number

  @Prop({required: true})
  userId: string
}

export const JokeSchema = SchemaFactory.createForClass(Joke)

JokeSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
})