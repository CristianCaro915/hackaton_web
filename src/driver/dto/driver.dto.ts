import {IsNotEmpty, IsString, IsNumber} from 'class-validator';
export class DriverDto {

 @IsString()
 @IsNotEmpty()
 readonly name: string;
 
 @IsString()
 @IsNotEmpty()
 readonly licence: string;
 
 @IsNumber()
 @IsNotEmpty()
 readonly score: number;
 

}