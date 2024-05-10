import {IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class UserDto {

 @IsString()
 @IsNotEmpty()
 readonly name: string;
 
 @IsNumber()
 @IsNotEmpty()
 readonly score: number;

}