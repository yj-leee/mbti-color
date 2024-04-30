import { Test, TestingModule } from '@nestjs/testing';
import { ColorSurveyController } from './color-survey.controller';

describe('ColorSurveyController', () => {
  let controller: ColorSurveyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorSurveyController],
    }).compile();

    controller = module.get<ColorSurveyController>(ColorSurveyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
