import { Body, Controller, Get, Post, Put, Res, UseGuards } from '@nestjs/common';
 
import { CarsService } from './cars.service';
import { AuthintcationGuard } from 'src/authintcation/authintcation.guard';
 

@Controller('cars')
export class CarsController {
    constructor(private readonly _CarsService:CarsService){}

    @Post()
    addCar(@Body() body:any,@Res() res:any):any{
        
        return this._CarsService.addCar(body,res)
    }
    @Get()
    @UseGuards(AuthintcationGuard)

    getCar(@Body() body :any,@Res() res:any):any{

        return this._CarsService.getCar(body,res)
    }
    @Get("all")
    getCars(@Res() res:any):any{

        return this._CarsService.getCars(res)
    }
    @Put("update")
    updateCar(@Body() body:any,@Res() res:any):any{

        return this._CarsService.updateCar(body,res)
    }

}
