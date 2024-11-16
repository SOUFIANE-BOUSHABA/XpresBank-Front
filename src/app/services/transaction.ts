
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  private transactionsApiUrl = '/api/transactions';



  constructor(private http: HttpClient) {}



  private getToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }



  createTransaction(transaction: Transaction): Observable<Transaction> {
    const headers = this.getToken();
    return this.http.post<Transaction>(`${this.transactionsApiUrl}/create`, transaction, { headers });
  }



  approveTransaction(transactionId: number): Observable<Transaction> {
    const headers = this.getToken();
    return this.http.put<Transaction>(`${this.transactionsApiUrl}/approve/${transactionId}`, {}, { headers });
  }


  rejectTransaction(transactionId: number): Observable<Transaction> {
    const headers = this.getToken();
    return this.http.put<Transaction>(`${this.transactionsApiUrl}/reject/${transactionId}`, {}, { headers });
  }


  getUserTransactions(): Observable<Transaction[]> {
    const headers = this.getToken();
    return this.http.get<Transaction[]>(`${this.transactionsApiUrl}/user-transactions`, { headers });
  }


  getAllTransactions(): Observable<Transaction[]> {
    const headers = this.getToken();
    return this.http.get<Transaction[]>(`${this.transactionsApiUrl}/all`, { headers });
  }


}
