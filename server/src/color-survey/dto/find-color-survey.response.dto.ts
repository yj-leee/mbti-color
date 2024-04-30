import { ApiProperty } from '@nestjs/swagger';

class CorlorSurvey {
  @ApiProperty({ example: 57, description: '색상 조사 ID' })
  readonly id: number;

  @ApiProperty({ example: '#000000', description: '컬러 코드' })
  readonly colorCode: string;

  @ApiProperty({ example: 'INFJ', description: 'MBTI 유형' })
  readonly mbti: string;

  @ApiProperty({ example: 1714442424000, description: '생성일자 timestamp' })
  readonly createdAt: number;

  @ApiProperty({ example: 1714442424000, description: '수정일자 timestamp' })
  readonly updatedAt: number;
}

export class FindCorlorSurveyResponseDto {
  @ApiProperty({ example: 57, description: '총 항목 수' })
  readonly count: number;

  @ApiProperty({
    example: 'localhost/?limit=20&offset=20',
    description: '다음 페이지 URL',
  })
  readonly next: string | null;

  @ApiProperty({ example: null, description: '이전 페이지 URL' })
  readonly previous: string | null;

  @ApiProperty({ type: [CorlorSurvey] })
  readonly results: CorlorSurvey[];
}
