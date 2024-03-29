import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //CRUD
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Get('relationship/:user1Id/:user2Id')
  async getDistance(@Param('user1Id') user1Id: string, @Param('user2Id') user2Id: string) {
    var distance = await this.usersService.getDistance(user1Id, user2Id);
    var users = await this.usersService.getUsers([user1Id, user2Id]);
    console.log(users);
    return {
      distance: distance,
      users: users,
    }
  }
}
