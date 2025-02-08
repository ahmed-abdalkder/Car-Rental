import { Module } from '@nestjs/common';
import { RentelModel } from 'src/db/renteldb/rentel.model';
import { RentalsController } from './rentals.controller';
import { RentalsService } from './rentals.service';
import { RenteldbService } from 'src/db/renteldb/renteldb.service';
import { CarModel } from 'src/db/car-db/carmodel';
import { CarDbService } from 'src/db/car-db/car-db.service';
 

@Module({
    imports:[RentelModel, CarModel],
     controllers: [RentalsController ],
     providers: [RentalsService,RenteldbService,CarDbService ],
})
export class RentalsModule {}
