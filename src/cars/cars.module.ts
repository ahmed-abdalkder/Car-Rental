import { Module } from '@nestjs/common';
 import { CarModel } from './../db/car-db/carmodel';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarDbService } from 'src/db/car-db/car-db.service';
import { UserdbService } from 'src/db/userdb/userdb.service';
import { UserModel } from 'src/db/userdb/user.model';
import { JwtService } from '@nestjs/jwt';

@Module({
    
    imports:[CarModel,UserModel],
     controllers: [CarsController ],
     providers: [CarsService,CarDbService,UserdbService,JwtService],
     exports: [CarDbService],
    })

        export class CarsModule {


}
