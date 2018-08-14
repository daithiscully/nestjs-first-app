import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UsersService, User } from 'users.service';

export interface JwtPayload {
    email: string;
};

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async createToken(user: User): Promise<any> {
        console.log(user);

        return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
    }

    async validateUser(payload: User): Promise<any> {
        return await this.usersService.findOneByEmail(payload.email);
    }
}
