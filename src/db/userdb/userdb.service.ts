import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
 

@Injectable()
export class UserdbService {

    constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
    
    findById(id:any){

        return this.UserModel.findById(id)
    }
    findOne(Object:any){

        return this.UserModel.findOne(Object)
    }
    create(Object:any){

        return this.UserModel.create(Object)
    }
}
