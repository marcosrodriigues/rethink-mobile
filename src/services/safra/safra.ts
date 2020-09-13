import { apiSafra } from '../safra';
import SafraUser from '../../interface/SafraUser';
import SafraBalance from '../../interface/SafraBalance';

const transactions = (accountId: string) => {
    return apiSafra.get(`/open-banking/v1/accounts/${accountId}/transactions`);
}

const account = async (accountId: string) : Promise<SafraUser> => {
    try {
        const { data } = await apiSafra.get(`/open-banking/v1/accounts/${accountId}`);
        const { Data } = data;
        const { Account } = Data;
        const safraUser = Account[0];
        return safraUser;
    } catch (error) {
        throw error;
    }
}

const balance = async (accountId: string) : Promise<SafraBalance> => {
    try {
        const { data } = await apiSafra.get(`/open-banking/v1/accounts/${accountId}/balances`);
        const { Data } = data;
        const { Balance } = Data;
        const safraBalance = Balance[0];
        return safraBalance;
    } catch (error) {
        throw error;
    }
}

const createAccount = async (params = { Name: '', Email: '', Phone: '' }) => {
    const data = params;
    try {
        apiSafra.post(`/accounts/v1/optin`, data, {
            headers: {
                ContentType: "application/json"
            }
        });
    } catch (error) {
        throw error;
    }
}

const transfers = (accountId: string) => {
    return apiSafra.get(`/open-banking/v1/accounts/${accountId}/transfers`);
}

export default {
    transactions,
    account,
    balance,
    transfers,
    createAccount
}