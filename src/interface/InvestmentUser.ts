import User from "./User";
import Investment from "./Investment";
import Objective from "./Objective";

export interface InvestmentUser {
    id?: number,
    user: User,
    investment: Investment,
    amount: number,
    objective?: Objective
}