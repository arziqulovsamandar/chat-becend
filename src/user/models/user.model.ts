import { ApiProperty } from "@nestjs/swagger";

import { Column, DataType,  Model, Table } from 'sequelize-typescript';

interface UserAttr{
    first_name:string,
    phone_number:string;
    cours:string;

}

@Table({ tableName: 'user' })
export class User extends Model<User, UserAttr> {
  @ApiProperty({ example: 1, description: 'UNIQUE ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Sobirov Sobir', description: 'Foydalanuvchi ism-familyasi' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({ example: '+998333360044', description: 'Foydalanuvchi telefon raqami' })
  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @ApiProperty({
    example: 'Full stack',
    description: 'Cours name',
  })
  @Column({
    type: DataType.STRING,
  })
  cours: string;

}
