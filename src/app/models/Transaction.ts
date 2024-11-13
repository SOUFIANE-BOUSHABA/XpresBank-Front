export interface Transaction {
  id?: number;
  sourceAccountNumber: string;
  destinationAccountNumber: string;
  type: 'CLASSIC' | 'INSTANT' | 'SCHEDULED';
  amount: number;
  transactionFee?: number;
  timestamp?: Date;
  status?: string;
  createdBy?: number;
  nextScheduledDate?: Date;
  frequency?: 'WEEKLY' | 'MONTHLY' | 'NONE';
  endDate?: Date;
}
