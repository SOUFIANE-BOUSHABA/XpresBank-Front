export interface CreditRequest {
  id?: number;
  amount: number;
  interestRate: number;
  startDate: Date;
  endDate?: Date;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';
  eligibilityStatus: string;
}
