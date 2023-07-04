export enum ReportType {
    INCOME= 'income',
    EXPENSE = 'expense'

}

export interface BodyInterface {
    source: string;
    amount: number;
}

export interface UpdateBodyInterface{
    source?: string;
    amount? : number;
}

export const data: Data = {
    report: [
        {
            id: '118dced5-2ad6-4237-bc11-597540fc2fb2',
            source: 'Salary',
            amount: 8000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: '118dced5-2ad6-4237-bc11-597540fc2fd2',
            source: 'Yotube',
            amount: 2000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: '118dced5-2ad6-4237-bc11-597540fc2d d2',
            source: 'Food',
            amount: 500,
            created_at: new Date(),
            updated_at: new Date(), 
            type: ReportType.EXPENSE
        }
    ]
}



interface Data {
    report:{
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType; 
    }[]
}