import { ConflictException, Injectable } from '@nestjs/common';
import { CarDbService } from 'src/db/car-db/car-db.service';
import { RenteldbService } from 'src/db/renteldb/renteldb.service';

@Injectable()
export class RentalsService {

    constructor(private Rentalmodel:RenteldbService,
        private CarDbService:CarDbService
    ){}

    async getrental(res:any):Promise<any>{

        const Rentals = await this.Rentalmodel.find({})

        res.json(Rentals) 
}

    async createRental(body:any ,res:any):Promise<any>{

        const{ userId, carId, rentalDuration, status} = body 

     const rentalexist = await this.Rentalmodel.findOne({carId,status:"Ongoing"})

     if(rentalexist){

        throw new ConflictException("rental is exist")

     }
      
     const car = await this.CarDbService.findById(carId)
     if(!car){

        throw new ConflictException("rental is exist")

     }
      
     const totalPrice =  +car.pricePerDay *  rentalDuration 

    const rental = await this.Rentalmodel.create(

      { userId, carId, rentalDuration, totalPrice, status} 
  )

    res.json({msg:"created",rental})
}

 async updaterental(body:any ,res:any):Promise<any>{
    const{rentalDuration, status,id} = body

    const rental = await this.Rentalmodel.findByIdAndUpdate(id,
        {rentalDuration,status})
    if(!rental){

        throw new ConflictException("rental not  exist")

     }

     res.json({msg:"created",rental})

}

}
