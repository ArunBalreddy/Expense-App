import {Controller, Get, Post, Put, Delete, Param, Body, ParseUUIDPipe, ParseEnumPipe} from '@nestjs/common'
import {data, ReportType} from '../data'
import {ReportService} from './report.service'
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from '../dtos/report.dto'

@Controller('report/:type')
export class ReportController{

  constructor(
    private readonly reportService: ReportService
  ){ }

  @Get()
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto[] {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type:string, @Param('id', ParseUUIDPipe) id:string
  ): ReportResponseDto {
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getReportById(reportType, id)
  }

  @Post()
  createReport(@Body() body: CreateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type:string ): ReportResponseDto { 

    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE 
    

    return this.reportService.createReport(reportType, body )
  } 

  @Put(':id')
  updateReport(
   @Param('type', new ParseEnumPipe(ReportType)) type:string,
   @Param('id', ParseUUIDPipe)id:string,
   @Body() body: UpdateReportDto ): ReportResponseDto { 
    const reportType = type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.updateReport(reportType, body, id)
  }

  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id:string){
    return this.reportService.deleteReport(id)
  }
}