import { ApiProperty } from "@nestjs/swagger";

import { Column, DataType,  Model, Table } from 'sequelize-typescript';


interface RegionAttr{
    soz:string,
    role:string
}

@Table({ tableName: 'soz' })
export class Region1 extends Model<Region1, RegionAttr> {
  @ApiProperty({ example: 1, description: 'UNIQUE ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  soz: string;

  @Column({
    type: DataType.STRING,
  })
  role: string;
}
