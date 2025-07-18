export interface Transaction {
    id: string,
    userID?: string,
    date?: Date,
    amount: number,
    reason: string,
    category: string,
}