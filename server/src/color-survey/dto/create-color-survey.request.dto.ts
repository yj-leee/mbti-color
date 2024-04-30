import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Matches } from 'class-validator';

export class CreateCorlorSurveyRequestDto {
  @ApiProperty({ example: '#000000', description: '컬러 코드입니다.' })
  @IsString()
  @Length(1, 7)
  readonly colorCode: string;

  @ApiProperty({ example: 'INFJ', description: 'MBTI 입니다.' })
  @IsString()
  @Length(4, 4)
  @Matches(/^[A-Z]+$/, {
    message: 'MBTI는 대문자 알파벳으로만 구성되어야 합니다.',
  })
  readonly mbti: string;
}
