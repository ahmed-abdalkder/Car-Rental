import { ConflictException, Injectable } from '@nestjs/common';
import { CarDbService } from './../db/car-db/car-db.service';
import { UserdbService } from 'src/db/userdb/userdb.service';
import { JwtService } from '@nestjs/jwt';
 
 

@Injectable()
export class CarsService {
    constructor(private Carmodel:CarDbService,
      private usermodel:UserdbService,private _jwtService: JwtService){}

    async addCar(body:any,res:any):Promise<any>{

      const{brand, model, pricePerDay, numberPlate, year} = body

      const carexist = await this.Carmodel.findOne({numberPlate})

      if(carexist){

        throw new ConflictException("car already exist")
      }

      const car = await this.Carmodel.create({
        brand, model, pricePerDay, numberPlate,year
      })

      res.json({msg:"created",car})
    }
    async getCar(body:any,res:any):Promise<any>{

        const{ id } = body

        const Car = await this.Carmodel.findById(id)

        if(!Car){

            throw new ConflictException("car dose not exist")

          }

       return res.json({msg:"done",Car})
         
    }
    async getCars(res:any):Promise<any>{

       

        const Cars = await this.Carmodel.find({})

        if(!Cars){

            throw new ConflictException("car dose not exist")

          }

       return res.json({msg:"done",Cars})
         
    }

    async updateCar(body:any,res:any):Promise<any>{

        const{id,pricePerDay}= body 

        const car = await this.Carmodel.findByIdAndUpdate( id,{pricePerDay}).exec()

        if(!car){

            throw new ConflictException("car dose not exist")

          }

        res.json({msg:"done",car})
    }
}
