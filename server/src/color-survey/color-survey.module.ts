import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorSurveyController } from 'src/color-survey/color-survey.controller';
import { ColorSurveyService } from 'src/color-survey/color-survey.service';
import { ColorSurveyEntity } from 'src/entities/color-survey';

@Module({
  imports: [TypeOrmModule.forFeature([ColorSurveyEntity])],
  controllers: [ColorSurveyController],
  providers: [ColorSurveyService],
})
export class ColorSurveyModule {}
