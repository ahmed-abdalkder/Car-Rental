import { Module } from '@nestjs/common';
import { UserModel } from 'src/db/userdb/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserdbService } from 'src/db/userdb/userdb.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    
    imports:[UserModel],
    controllers: [UsersController ],
    providers: [UsersService,UserdbService,JwtService],
})
export class UsersModule {}
