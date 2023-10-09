import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJson(): string {
    const obj = `{id: 1, name: ''}`;
    return obj;
    // return JSON.stringify(obj);
  }
}
