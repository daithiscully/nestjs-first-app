import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, SimpleMessage } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('welcomeRequest', () => {
    it('should return "Hello David!" SimpleMessage', () => {
      const appController = app.get<AppController>(AppController);
      const expectedResponse: SimpleMessage = {
        message: 'Hello David!',
      };
      appController.welcomeRequest().toPromise()
        .then(res => expect(res).toEqual(expectedResponse));
  });
});
});
