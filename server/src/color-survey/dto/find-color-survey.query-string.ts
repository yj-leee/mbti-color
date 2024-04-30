import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FindCorlorSurveyQueryString {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @ApiProperty({ example: 0, default: 0, required: false, minimum: 0 })
  readonly offset: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @ApiProperty({
    example: 20,
    default: 20,
    required: false,
    minimum: 1,
    maximum: 100,
  })
  readonly limit: number = 20;

  @ApiProperty({
    example: null,
    default: null,
    maxLength: 30,
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @MaxLength(4)
  readonly mbti: string | null = null;
}
