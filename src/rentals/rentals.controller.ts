import { Body, Controller, Get, Post, Put, Res, UseGuards } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { AuthintcationGuard } from 'src/authintcation/authintcation.guard';

@Controller('rentals')
export class RentalsController {

    constructor(private readonly _RentalsService: RentalsService){}

    @Get()

    getrental(@Res() res:any):any{
        
        return this._RentalsService.getrental(res)
    }
    @Post()
    createRental(@Body() body:any,@Res() res:any):any{

        return this._RentalsService.createRental(body,res)
    }
    @Put()
    updaterental(@Body() body:any,@Res() res:any):any{
        
        return this._RentalsService.updaterental(body,res)

    }

}
