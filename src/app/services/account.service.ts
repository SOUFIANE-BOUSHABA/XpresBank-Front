// src/app/services/account.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsApiUrl = '/api/accounts';

  constructor(private http: HttpClient) {}

  private getToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createAccount(account: Account): Observable<Account> {
    const headers = this.getToken();
    return this.http.post<Account>(`${this.accountsApiUrl}/create`, account, { headers });
  }


  getAccountsByUser(): Observable<Account[]> {
    const headers = this.getToken();
    return this.http.get<Account[]>(`${this.accountsApiUrl}/user/accounts`, { headers });
  }


  getAllAccounts(): Observable<Account[]> {
    const headers = this.getToken();
    return this.http.get<Account[]>(`${this.accountsApiUrl}/all`, { headers });
  }


  getAccount(accountId: number): Observable<Account> {
    const headers = this.getToken();
    return this.http.get<Account>(`${this.accountsApiUrl}/${accountId}`, { headers });
  }


  updateAccountStatus(accountId: number, status: 'ACTIVE' | 'BLOCKED'): Observable<Account> {
    const headers = this.getToken();
    return this.http.put<Account>(`${this.accountsApiUrl}/${accountId}/status`, status, { headers });
  }


  deleteAccount(accountId: number): Observable<void> {
    const headers = this.getToken();
    return this.http.delete<void>(`${this.accountsApiUrl}/${accountId}`, { headers });
  }
}
