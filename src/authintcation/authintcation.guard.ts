import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/db/userdb/user.model';

@Injectable()
 export class AuthintcationGuard implements CanActivate {

    constructor(@InjectModel(User.name) private UserModel: Model<User>,private _jwtService: JwtService) {}
  
    async canActivate( context: ExecutionContext): Promise<any> {

    const request = context.switchToHttp().getRequest()

    const {token} = request.headers

    if(!token){

      throw new NotFoundException("token not found")
    }
    if(!token.startsWith("ahmed__")){

      throw new NotFoundException("invalid token ")

    }
    const newtoken = token.split("ahmed__")[1]

    if(!newtoken){

      throw new NotFoundException("invalid newtoken ")

    }
    const decoded = this._jwtService.verify(newtoken,{secret: "tokenkey"})
     
    if(!decoded?.id){

      throw new NotFoundException("invalid newtoken ")

    }
    const user = await this.UserModel.findById(decoded.id)
     
    if(!user){

      throw new NotFoundException("invalid newtoken ")

    }

    request.user = user
    
    return true;
  }
}
