import { Test, TestingModule } from '@nestjs/testing';
import { ColorSurveyService } from './color-survey.service';

describe('ColorSurveyService', () => {
  let service: ColorSurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorSurveyService],
    }).compile();

    service = module.get<ColorSurveyService>(ColorSurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
