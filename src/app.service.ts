import { Injectable } from '@nestjs/common';
import { AuthService } from 'auth.service';
import { User } from 'users.service';

export interface SimpleMessage {
  message: string;
}

@Injectable()
export class AppService {
  welcomeMessage: SimpleMessage = {
    message: 'Hello David!',
  };

  constructor(private readonly authService: AuthService) {
  }

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
