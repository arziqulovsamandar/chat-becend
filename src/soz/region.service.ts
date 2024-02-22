import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region1 } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region1)
    private readonly regionModel: typeof Region1,
  ) {}

  async findAll(): Promise<Region1[]> {
    return this.regionModel.findAll({ include: { all: true } });
  }

  async create(createServiceDto: CreateRegionDto): Promise<Region1> {
    return this.regionModel.create(createServiceDto);
  }

  async deleteAll(): Promise<void> {
    const numRowsDeleted = await this.regionModel.destroy({
      where: {},
    });
  }
}
