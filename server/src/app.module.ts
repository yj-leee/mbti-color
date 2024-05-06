import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorSurveyModule } from 'src/color-survey/color-survey.module';
import { DatabaseModule } from 'libs/database';

@Module({
  imports: [DatabaseModule, ColorSurveyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
