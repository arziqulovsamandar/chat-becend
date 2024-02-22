import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Region1 } from './models/region.model';

@Controller('send')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: 'All Region' })
  @Get()
  async findAll(): Promise<Region1[]> {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: 'Create Region' })
  @Post()
  async create(@Body() createServiceDto: CreateRegionDto): Promise<Region1> {
    return this.regionService.create(createServiceDto);
  }


  @Delete()
  async deleteAll(): Promise<void> {
    await this.regionService.deleteAll();
  }
}
