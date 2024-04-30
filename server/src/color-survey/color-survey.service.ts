import { FindCorlorSurveyQueryString } from './dto/find-color-survey.query-string';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCorlorSurveyRequestDto } from 'src/color-survey/dto/create-color-survey.request.dto';
import { ColorSurveyEntity } from 'src/entities/color-survey';
import { Repository } from 'typeorm';

interface TransformedColorSurvey {
  id: number;
  colorCode: string;
  mbti: string;
  createdAt: number;
  updatedAt: number;
}

@Injectable()
export class ColorSurveyService {
  constructor(
    @InjectRepository(ColorSurveyEntity)
    private colorSurveyRepository: Repository<ColorSurveyEntity>,
  ) {}

  async create(dto: CreateCorlorSurveyRequestDto): Promise<void> {
    const colorSurvey = await this.colorSurveyRepository.create(dto);
    await this.colorSurveyRepository.save(colorSurvey);
  }

  async find(
    queryString: FindCorlorSurveyQueryString,
  ): Promise<{ results: TransformedColorSurvey[]; count: number }> {
    const { offset, limit, mbti } = queryString;
    let query = this.colorSurveyRepository.createQueryBuilder('colorSurvey');
    query.offset(offset).limit(limit);
    if (mbti) {
      query = query.where('colorSurvey.mbti = :mbti', { mbti });
    }
    const [results, count] = await query.getManyAndCount();

    return {
      results: results.map((result) => ({
        ...result,
        createdAt: result.createdAt.getTime(),
        updatedAt: result.updatedAt.getTime(),
      })),
      count,
    };
  }
}
