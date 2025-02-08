import { ConflictException, Injectable } from '@nestjs/common';
import { UserdbService } from './../db/userdb/userdb.service';
 import * as bcrypt from 'bcrypt';
 import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {

constructor(private usermodel:UserdbService,private _jwtService: JwtService){}

   async signup(body:any,res:any): Promise<any> {

       const{name,email,password,phone,role} = body

       const userexist = await this.usermodel.findOne({email})

       if(userexist){

         throw new ConflictException("user already exist")
       }

     const hash = bcrypt.hashSync(password ,12)

     const user = await this.usermodel.create({
        name,email,password:hash,phone,role
     })

     res.json({mag:"done",user})

    }
   async signin(body:any,res:any):Promise<any>{

    const{email,password} = body 

    const user = await this.usermodel.findOne({email})

    if(!user || !bcrypt.compareSync(password, user.password)){

        throw new ConflictException("user not exist")
    }

     const token = this._jwtService.sign({id:user._id,role:user.role},{secret: "tokenkey"})

     res.json({mag:"token",token})
   }
}
