import { Get, Controller, Response, HttpCode, Req, Post, Body, Header } from '@nestjs/common';
import { AppService, SimpleMessage } from './app.service';
import { log } from 'util';
import { of, Observable } from 'rxjs';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  welcomeRequest(): Observable<SimpleMessage> {
    return of(this.appService.getWelcomeMessage());
  }
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(202)
  changeMessage(@Body() request: SimpleMessage): SimpleMessage {
    return this.appService.setWelcomeMessage(request.message);
  }
}
