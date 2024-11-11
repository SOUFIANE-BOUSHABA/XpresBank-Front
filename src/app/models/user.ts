export interface User {
  id: number;
  username: string;
  password?: string;
  email: string;
  active: boolean;
  role: string;
  age?: number;
  monthlyIncome?: number;
  creditScore?: number;
  debtToIncomeRatio?: number;
  bankingDuration?: number;
}
