import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReturnedUserDto {
  @ApiProperty({ example: 4587, required: true })
  @IsNotEmpty()
  id: number;
  @ApiProperty({ example: 'معاذ محمد', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ example: 'MoazHassan2022', required: true })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({ example: 'moaz@gmail.com', required: true })
  @IsString()
  @IsNotEmpty()
  email: string;
  @ApiProperty({ example: '2004-05-23T14:25:10', required: true })
  @IsNotEmpty()
  createdAt: Date;
  @ApiProperty({ example: '+201060534698', required: false })
  @IsString()
  @IsOptional()
  phoneNumber?: string;
  @ApiProperty({
    example: 'photo.jpg',
    required: false,
    description:
      'Access this photo file through /api/v1/public/users/files/{photo filename}',
  })
  @IsString()
  @IsOptional()
  photo?: string;
  @ApiProperty({ example: '4000545640209447', required: false })
  @IsString()
  @IsOptional()
  creditCard?: string;
}
