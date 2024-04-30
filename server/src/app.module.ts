import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorSurveyModule } from 'src/color-survey/color-survey.module';
import { ColorSurveyEntity } from 'src/entities/color-survey';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: 'root',
      password: 'test',
      database: 'ColorSurvey',
      entities: [ColorSurveyEntity],
      synchronize: true,
    }),
    ColorSurveyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
