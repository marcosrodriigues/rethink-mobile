export default interface SafraUser {
    AccountId: string,
    Currency: string,
    Nickname: string,
    Account: {
      SchemeName: string,
      Identification: string,
      Name: string,
      SecondaryIdentification: string,
    }
}