import { Injectable } from '@nestjs/common';
import { log } from 'util';

export interface User {
  firstname: string;
  surname: string;
  email: string;
}

@Injectable()
export class UsersService {
  async findOneByEmail(email: string): Promise<User> {
    // TODO implement the lookup functionality here instead of creating a user
    const user: User = {
      firstname: 'David',
      surname: 'Scully',
      email,
    };
    // simulated latency with database
    // await this.delay(1000, 1);
    log(`Found the user: ${JSON.stringify(user)}`);
    return user;
  }

  delay(milliseconds: number, count: number): Promise<number> {
    log(`About to wait for ${milliseconds} ms, ${count} times`);
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(count);
      }, milliseconds);
    });
  }
}
