export const signIn = (email: string, password: string) =>  {
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
    //return api.post('auth/logout');
}

export const signInWithSafra = (user : any) => {
    return {
        data: {
            token: 'TokenSafraUser',
            user :{
                id: 'generatedKey',
                name: 'Safra user'
            }
        }
    }
}