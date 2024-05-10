import {IsNotEmpty, IsString, IsBoolean } from 'class-validator';
export class RideDto {

 @IsString({ each: true })
 @IsNotEmpty()
 readonly route: string[];
 
 @IsString()
 @IsNotEmpty()
 readonly userLocation: string;
 
 @IsString()
 @IsNotEmpty()
 readonly destination: string;
 
 @IsString()
 @IsNotEmpty()
 readonly startHour: string;

 @IsString()
 @IsNotEmpty()
 readonly endHour: string;

 @IsString()
 @IsNotEmpty()
 readonly price: string;

 @IsBoolean ()
 @IsNotEmpty()
 readonly active: Boolean;

}