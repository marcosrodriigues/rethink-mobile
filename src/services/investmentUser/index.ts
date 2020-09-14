import api from '../api';
import { InvestmentUser } from '../../interface/InvestmentUser';

const createInvestment = async (investmentUser: InvestmentUser) : Promise<InvestmentUser> => {
    const params = {
        customer_id: investmentUser.user.accountId,
        investment_id: investmentUser.investment.id,
        amount: investmentUser.amount,
        objective_id: investmentUser.objective?.id
    }
    try {
        const { data } = await api.post('/investment', params);
        return data;
    } catch (error) {
        throw error;
    }
}

export default {
    createInvestment
}