import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('AuthService:: validateUser:: start')
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log('password: ' + password)
      return result;
    }
    console.log('AuthService:: validateUser:: end')
    return null;
  }

  /**
   * creates a new jwt token based on the user data
   * uses jwtService sign method
  */
  async login(user: any){
    const payload = {username: user.username, sub: user.userId};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
