
import accounts from '../../utils/accounts.json';
import { apiLoginSafra, apiSafra } from '../safra';
import safraService from '../safra/safra';
import { encode } from 'base-64';

const credential = {
    client_id: process.env.REACT_NATIVE_APP_SAFRA_CLIENT_ID || '',
    secret: process.env.REACT_NATIVE_APP_SAFRA_SECRET       || '',
}

export const signIn = async () =>  {
    const concatened = `${credential.client_id}:${credential.secret}`;
    const base64 = encode(concatened);
    const formString = "grant_type=client_credentials&scope=urn:opc:resource:consumer::all";

    try {

        const { data } = await apiLoginSafra.post('/', formString, {
            headers: {
                Authorization: `Basic ${base64}`,
                ContentType: `application/x-www-form-urlencoded`
            }
        })

        const { access_token, token_type } = data;

        apiSafra.defaults.headers.Authorization = `${token_type} ${access_token}`;
    } catch (error) {
        throw error;
    }

}

export const signOut = () =>  {
    return;
}

export const signInWithSafra = async () => {
    try {
        const randomAccountId = getRandomAccountId();

        const safraUser = await safraService.account(randomAccountId)

        const user = {
            id: safraUser.Account.Identification,
            accountId: safraUser.AccountId,
            name: safraUser.Account.Name,
            safraId: safraUser.Account.Identification,
            nickname: safraUser.Nickname
        }
        return {
            user
        }
    } catch (error) {
        throw error;
    }
}

const getRandomAccountId = () => {
    const rand = 100 * Math.random();
    const index = rand % accounts.length
    return accounts[Math.floor(index)];
}