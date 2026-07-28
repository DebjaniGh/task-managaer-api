import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from 'src/dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: { email: string; password: string }) {
    const { email, password } = dto;
    return this.authService.login(email, password);
  }
}
