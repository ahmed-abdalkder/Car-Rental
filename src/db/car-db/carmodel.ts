

import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
 
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema({timestamps:true,versionKey:false})

export class Car {
  
  @Prop({required:true})
  brand: string;

  @Prop({required:true})
  model: string;

  @Prop({required:true})
  year: string;

  @Prop({required:true})
  pricePerDay: Number

  @Prop({required:true, unique:true})
  numberPlate: string;

   
}
           
 
   const CarSchema = SchemaFactory.createForClass(Car);
export const CarModel = MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])