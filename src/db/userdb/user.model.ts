

import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps:true,versionKey:false})
export class User {
  
  @Prop({required:true})
  name: string;

  @Prop({required:true,unique:true})
  email: string;

  @Prop({required:true})
  password: string;

  @Prop({required:true})
  phone: string;

  @Prop({required:true,enum:["admin","user"] })
  role: string;
}

  const UserSchema = SchemaFactory.createForClass(User);
  export const UserModel = MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])