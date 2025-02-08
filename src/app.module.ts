import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { RentalsModule } from './rentals/rentals.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost/carrentel'), CarsModule, RentalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
