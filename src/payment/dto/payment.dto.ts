import {IsNotEmpty, IsString} from 'class-validator';
export class PaymentDto {

 @IsString()
 @IsNotEmpty()
 readonly type: string;
 
 @IsString()
 @IsNotEmpty()
 readonly number: string;
 
 @IsString()
 @IsNotEmpty()
 readonly expDate: string;
 

}