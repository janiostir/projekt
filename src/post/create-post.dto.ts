import {IsNotEmpty, IsString} from "class-validator";

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    title: String;

    @IsNotEmpty()
    @IsString()
    content: String;

    @IsNotEmpty()
    subject_id: number;

}