import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditRequest } from '../models/credit-request';

@Injectable({
  providedIn: 'root'
})
export class CreditRequestService {
  private creditRequestApiUrl = '/api/credit-requests';

  constructor(private http: HttpClient) {}

  private getToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  requestCredit(creditRequest: CreditRequest): Observable<CreditRequest> {
    const headers = this.getToken();
    return this.http.post<CreditRequest>(`${this.creditRequestApiUrl}/request`, creditRequest, { headers });
  }

  getAllCreditRequests(): Observable<CreditRequest[]> {
    const headers = this.getToken();
    return this.http.get<CreditRequest[]>(`${this.creditRequestApiUrl}`, { headers });
  }

  getCreditRequestById(creditRequestId: number): Observable<CreditRequest> {
    const headers = this.getToken();
    return this.http.get<CreditRequest>(`${this.creditRequestApiUrl}/${creditRequestId}`, { headers });
  }

  approveCreditRequest(creditRequestId: number, approve: boolean): Observable<CreditRequest> {
    const headers = this.getToken();
    return this.http.put<CreditRequest>(`${this.creditRequestApiUrl}/approve/${creditRequestId}?approve=${approve}`, {}, { headers });
  }
}
