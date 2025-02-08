

import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
 
import { HydratedDocument, Types } from 'mongoose';
import { required } from 'joi';
 

export type RentelDocument = HydratedDocument<Rentel>;

@Schema({timestamps:true,versionKey:false})
export class Rentel {
  @Prop({ type: Types.ObjectId, ref: 'User' ,required:true})
  userId:Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Car' ,required:true}) 
  carId:Types.ObjectId;

  @Prop()
  totalPrice: Number;

  @Prop({enum:[ 'Ongoing','Completed','Canceled'],required:true})
  status: String;

  @Prop({required:true})
  rentalDuration: number;
}
 
  
 const RentelSchema = SchemaFactory.createForClass(Rentel);

 export const RentelModel = MongooseModule.forFeature([{ name: Rentel.name, schema: RentelSchema }])