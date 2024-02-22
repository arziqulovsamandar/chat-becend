import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Sobirov Sobir',
    description: 'Foydalanuvchi ism-familyasi',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: '+998333360044', description: 'Phone number' })
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @ApiProperty({ example: 'Full stack ', description: 'Cours name' })
  @IsNotEmpty()
  @IsString()
  cours: string;

}
