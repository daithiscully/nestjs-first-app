import { Injectable } from '@nestjs/common';
import { AuthService } from 'auth.service';
import { User } from 'users.service';
import { log } from 'util';

export interface SimpleMessage {
  message: string;
}

@Injectable()
export class AppService {
  constructor(private readonly authService: AuthService) {

  }


  welcomeMessage: SimpleMessage = {
    message: 'Hello David!',
  };
  getWelcomeMessage() {
    return this.welcomeMessage;
  }

  setWelcomeMessage(message: string) {
    this.welcomeMessage.message = message;
    return this.welcomeMessage;
  }

  getJwtToken(user: User): Promise<any> {
    return this.authService.createToken(user);
  }
}
