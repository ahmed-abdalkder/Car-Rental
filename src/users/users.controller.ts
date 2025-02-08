import { Body, Controller, Post, Res, UsePipes } from '@nestjs/common';
import { JoivalidationPipe } from 'src/joivalidations/joivalidation.pipe';
import { UsersService } from './users.service';
import { signupvalidation } from './schema.joi';
 

@Controller('Users')

export class UsersController {

    constructor(private readonly _userservice:UsersService){}

    @Post()
    @UsePipes(new JoivalidationPipe(signupvalidation))
    signup(@Body() body:any,@Res() res:any):any{

        return this._userservice.signup(body,res)
    }
    @Post("signin")
    signin(@Body() body:any,@Res() res:any):any{

        return this._userservice.signin(body,res)
        
    }

}
