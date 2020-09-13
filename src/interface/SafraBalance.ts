export default interface SafraBalance {
    AccountId: string,
    Amount: Amount,
    CreditDebitIndicator: string,
    Type: string,
    DateTime: string,
    CreditLine: [
        {
            Included: boolean,
            Amount: Amount,
            Type: string
        }
    ]
}

interface Amount {
    Amount: string,
    Currency: string
}