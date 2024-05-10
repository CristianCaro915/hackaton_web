import {IsNotEmpty, IsString} from 'class-validator';
export class CarDto {

 @IsString()
 @IsNotEmpty()
 readonly plate: string;
 
 @IsString()
 @IsNotEmpty()
 readonly brand: string;
 
 @IsString()
 @IsNotEmpty()
 readonly reference: string;
 
 @IsString()
 @IsNotEmpty()
 readonly color: string;

}