import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class UpdatePostDto{

    @IsString()
    @IsOptional()
    title?: String;

    @IsOptional()
    @IsString()
    content?: String;

    @IsNotEmpty()
    @IsNumber()
    subject_id?:number;

}