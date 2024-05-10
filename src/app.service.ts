import { Injectable } from '@nestjs/common';

//Ping
@Injectable()
export class AppService {
  getPing(): string {
    return 'Pong';
  }
}
