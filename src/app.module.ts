import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { JwtStrategyService } from 'jwt-strategy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService, JwtStrategyService],
})
export class AppModule { }
