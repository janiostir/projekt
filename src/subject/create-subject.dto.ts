import {IsNotEmpty, IsString} from "class-validator";

export class CreateSubjectDto {

    @IsNotEmpty()
    @IsString()
    title: String;

    @IsNotEmpty()
    @IsString()
    description: String;
}