import {Injectable} from '@nestjs/common'

import {data, ReportType, BodyInterface, UpdateBodyInterface} from '../data'
import {v4 as uuid} from 'uuid'
import { ReportResponseDto } from '../dtos/report.dto'

@Injectable()
export class ReportService{
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report.filter(report => report.type === type).map(report => new ReportResponseDto(report))
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const reportToReturn = data.report.filter(report => report.type === type).find(report => report.id === id)
    if (reportToReturn === undefined) return //'There is No Report on this ID';
    return new ReportResponseDto(reportToReturn)
  }

  createReport(type: ReportType, body: BodyInterface ):ReportResponseDto {
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type, 
    }

    data.report.push(newReport)
    return  new ReportResponseDto(newReport)
  }

  updateReport(type: ReportType, body: UpdateBodyInterface, id: string):ReportResponseDto {
    const reportToUpdate = data.report.filter(report => report.type === type).find(report => report.id === id)
    if (reportToUpdate === undefined) return // 'There is No Report on this ID';

    const reportIndex = data.report.findIndex(report => report.id === reportToUpdate.id)
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    }
    return new ReportResponseDto(data.report[reportIndex])
  }

  deleteReport(id: string){
    const reportIndex = data.report.findIndex(report => report.id === id)
    if (reportIndex === -1) return 'There is No Report on this ID';

    data.report.splice(reportIndex, 1)
    return 'Report Deleted Successfully'
  }

} 