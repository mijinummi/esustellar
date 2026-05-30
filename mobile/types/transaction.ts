export type TransactionType =
  | "contribution"
  | "payout";

export interface Transaction {
  id: string;
  amount: number;
  createdAt: string;
  type: TransactionType;
}