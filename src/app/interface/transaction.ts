export interface Transaction {
    userId?: string,
    id: string,
    date?: Date,
    amount: number,
    reason: string,
    category: string,
}