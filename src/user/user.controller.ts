import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {Request} from "express";
import {JwtService} from "@nestjs/jwt";
import {AuthGuard} from "../auth/auth.guard";

@Controller('users') // \users
export class UserController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService) {
    }

    @Get('users') // če dam npr 'vsi' bi rabu potem dat v urlju na koncu \vsi -> users\vsi
    all(){
        return this.userService.all();
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    async profile(@Req() request: Request){
        const token = request.cookies['jwt'];

        const data = await this.jwtService.verifyAsync(token);

        return this.userService.findOne({id: data.id});
    }

    @Post('user') // \users\user
    create(@Body() data): Promise<User>{
        return this.userService.create(data);
    }

    @Get(':id') // učitl je pr temu dau findOne, sam me ni delalo tako
    getUserById(@Param('id') id: number): Promise<User>{
        return this.userService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() data
    ): Promise<User>{
        return await this.userService.update(id, data);
    }

    @Delete(':id')
    delete(
        @Param('id') id: number
    ): Promise<any>{
        return this.userService.delete(id);
    }


}
