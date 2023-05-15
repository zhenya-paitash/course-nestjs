import {
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  BadRequestException,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) throw new BadRequestException('Id должен быть больше 0');
    return this.appService.getUserById(id);
  }

  @Get('get')
  getUsers() {
    return this.appService.getUsers();
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async createUser(@Body() dto: CreateDto) {
    const user = await this.appService.createUser(dto);
    return user;
  }
}
