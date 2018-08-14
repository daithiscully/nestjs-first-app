import { Get, Controller, Response, HttpCode, Req, Post, Body, Header, UseGuards } from '@nestjs/common';
import { AppService, SimpleMessage } from './app.service';
import { log } from 'util';
import { of, Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'users.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  welcomeRequest(): Observable<SimpleMessage> {
    return of(this.appService.getWelcomeMessage());
  }

  @Post('token')
  getToken(@Body() request: User): Promise<any> {
    return this.appService.getJwtToken(request);
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(202)
  @UseGuards(AuthGuard('jwt'))
  changeMessage(@Body() request: SimpleMessage): SimpleMessage {
    return this.appService.setWelcomeMessage(request.message);
  }
}
