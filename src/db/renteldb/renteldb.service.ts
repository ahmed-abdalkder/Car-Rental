import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rentel } from './rentel.model';
import { Model } from 'mongoose';
 
 
 

@Injectable()
export class RenteldbService {

    constructor(@InjectModel(Rentel.name) private RentelModel: Model<Rentel>) {}

   find(any:any){
    return this.RentelModel.find(any) 
   }

   findById(id:any){
    return this.RentelModel.findById(id) 
   }
   findOne(object:any){
    return this.RentelModel.findOne(object) 
   }
   create(object:any){
    return this.RentelModel.create(object) 
   }
   findByIdAndUpdate(id:any,update:any){
    return this.RentelModel.findByIdAndUpdate(id,update) 
   }
   findByIdAndDelete(id:any){
    return this.RentelModel.findByIdAndDelete(id) 
   }
}
