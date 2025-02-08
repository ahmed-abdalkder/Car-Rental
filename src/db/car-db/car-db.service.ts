import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './carmodel';
 

@Injectable()
export class CarDbService {
    
    constructor(@InjectModel(Car.name) private CarModel: Model<Car>) {}

    findOne(Object:any){

        return this.CarModel.findOne(Object)
    }
    findById(id:any){

        return this.CarModel.findById(id)
    }
    create(Object:any){

        return this.CarModel.create(Object)
    }
    find(any:any){

        return this.CarModel.find(any)
    }
     
    findByIdAndUpdate(id: string, updateData: any) {

        return this.CarModel.findByIdAndUpdate(id, updateData ) 
      }
}
