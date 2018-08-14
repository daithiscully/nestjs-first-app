import { Injectable } from '@nestjs/common';

export interface SimpleMessage {
  message: string;
}

@Injectable()
export class AppService {
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
}
