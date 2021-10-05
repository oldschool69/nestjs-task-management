import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  createTask(@Body() authCredentialsDto: AuthCredentialDto): void {
    console.log('authCredentialsDto', authCredentialsDto);
    this.authService.createTask(authCredentialsDto);
  }
}
