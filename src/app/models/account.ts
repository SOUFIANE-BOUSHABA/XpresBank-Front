export interface Account {
  id?: number;
  accountNumber: string;
  balance: number;
  status: 'ACTIVE' | 'BLOCKED';
  userId?: number;
}
