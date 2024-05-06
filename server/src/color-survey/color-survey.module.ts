import { Module } from '@nestjs/common';
import { DatabaseModule } from 'libs/database';
import { ColorSurveyController } from 'src/color-survey/color-survey.controller';
import { ColorSurveyService } from 'src/color-survey/color-survey.service';
import { ColorSurveyEntity } from 'src/entities/color-survey';
import { DataSource } from 'typeorm';

@Module({
  imports: [DatabaseModule],
  controllers: [ColorSurveyController],
  providers: [
    {
      provide: 'COLOR_REPOSITORY',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ColorSurveyEntity),
      inject: ['DATA_SOURCE'],
    },
    ColorSurveyService,
  ],
})
export class ColorSurveyModule {}
