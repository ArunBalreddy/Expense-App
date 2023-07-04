
import {IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional} from 'class-validator'
import {Exclude, Expose} from 'class-transformer'
import { ReportType } from 'src/data';

export class CreateReportDto{

    @IsNotEmpty()
    @IsString()
    source: string;

    @IsNumber()
    @IsPositive()
    amount: number;
}

export class UpdateReportDto{
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    source: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;
}

export class ReportResponseDto{
    id: string;
    source: string;
    amount: number;
    type: ReportType;

    @Exclude()
    created_at: Date;

    @Exclude()
    updated_at: Date;

    @Expose({name: 'createdAt'})
    transformCreatedAt(){
        return this.created_at
    }

    @Expose({name: 'updatedAt'})
    transformupdatedAt(){
        return this.updated_at
    }


    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this, partial)
    }
}