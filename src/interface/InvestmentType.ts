import Investment from "./Investment";

export interface InvestmentType {
    id: number,
    title: string,
    availableInvestments: [Investment]
}