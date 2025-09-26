import { Controller, Post, Body } from '@nestjs/common';
import { AuthorityService } from './authority.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authorityService: AuthorityService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authorityService.register(body);
  }
}
