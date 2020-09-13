import credentials from '../../utils/credentials.json';
import accounts from '../../utils/accounts.json';
import { apiLoginSafra, apiSafra } from '../safra';
import safraService from '../safra/safra';
import { encode } from 'base-64';

export const signIn = (ag: string, cc: string, pass: string) =>  {
    return {
        data: {
            token: 'TokenNormalUser',
            user :{
                id: 'generatedKey',
                name: 'Normal user'
            }
        }
    }
}

export const signOut = () =>  {
    return;
}

export const signInWithSafra = async () => {
    const credential = getRandomCredential();
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

const getRandomCredential = () => {
    const rand = 100 * Math.random();
    const index = rand % credentials.length
    return credentials[Math.floor(index)];
}

const getRandomAccountId = () => {
    const rand = 100 * Math.random();
    const index = rand % accounts.length
    return accounts[Math.floor(index)];
}