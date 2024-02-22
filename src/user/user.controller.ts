import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';
import { User } from './models/user.model';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'All User' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }


  @ApiOperation({ summary: 'Create User' })
  @Post()
  async create(@Body() createServiceDto: CreateUserDto): Promise<User> {
    return this.userService.create(createServiceDto);
  }


  @ApiOperation({ summary: 'Delete User' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
