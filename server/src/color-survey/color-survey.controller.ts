import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ColorSurveyService } from 'src/color-survey/color-survey.service';
import { CreateCorlorSurveyRequestDto } from 'src/color-survey/dto/create-color-survey.request.dto';
import { FindCorlorSurveyQueryString } from 'src/color-survey/dto/find-color-survey.query-string';
import { FindCorlorSurveyResponseDto } from 'src/color-survey/dto/find-color-survey.response.dto';

@ApiTags('color-survey')
@Controller('color-survey')
export class ColorSurveyController {
  constructor(private colorSurveyService: ColorSurveyService) {}

  @Post()
  @ApiOkResponse()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '컬러 설문조사 생성' })
  async create(@Body() dto: CreateCorlorSurveyRequestDto): Promise<void> {
    await this.colorSurveyService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: FindCorlorSurveyResponseDto })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '컬러 설문조사 조회' })
  async find(
    @Query() querystring: FindCorlorSurveyQueryString,
    @Req() req: Request,
  ): Promise<FindCorlorSurveyResponseDto> {
    const { results, count } = await this.colorSurveyService.find(querystring);
    const currentUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const nextOffset = querystring.offset + querystring.limit;
    const nextUrl =
      count > nextOffset
        ? `${currentUrl}?limit=${querystring.limit}&offset=${nextOffset}`
        : null;

    return {
      previous: currentUrl,
      next: nextUrl,
      count,
      results,
    };
  }
}
