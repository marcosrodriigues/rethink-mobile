import api from '../api'
import { InvestmentType } from '../../interface/InvestmentType';

const getAll = async () : Promise<InvestmentType[]> => {
    try {
        const { data } = await api.get('all-investment-types');
        return data;
    } catch (error) {
        throw error;
    }
}


export default {
    getAll
};
