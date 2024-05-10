import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import modules
import { PaymentModule } from './payment/payment.module';
import { DriverModule } from './driver/driver.module';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { RideModule} from './ride/ride.module';
//import entities
import { PaymentEntity } from './payment/entity/payment.entity';
import { DriverEntity } from './driver/entity/driver.entity';
import { CarEntity } from './car/entity/car.entity';
import { UserEntity } from './user/entity/user.entity';
import { RideEntity } from './ride/entity/ride.entity';

@Module({
 imports: [PaymentModule, DriverModule, CarModule, UserModule, RideModule,
   TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'db',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'hackaton',
     entities: [__dirname + '/**/*.entity{.ts,.js}'], //write all entities or...
     synchronize: true
   }),
 ],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}