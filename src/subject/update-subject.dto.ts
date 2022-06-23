import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateSubjectDto {

    @IsOptional()
    @IsString()
    title?: String;

    @IsOptional()
    @IsString()
    description?: String;
}