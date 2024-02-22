import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly regionModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.regionModel.findAll({ include: { all: true } });
  }


  async create(createServiceDto: CreateUserDto): Promise<User> {
    return this.regionModel.create(createServiceDto);
  }


  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.regionModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
