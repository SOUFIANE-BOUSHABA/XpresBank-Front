import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditRequest } from '../models/CreditRequest';

@Injectable({
  providedIn: 'root'
})
export class CreditRequestService {
  private apiUrl = '/api/credit-requests';

  constructor(private http: HttpClient) {}

  private getToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }



  createCreditRequest(request: CreditRequest): Observable<CreditRequest> {
    const headers = this.getToken();
    return this.http.post<CreditRequest>(`${this.apiUrl}/request`, request, { headers });
  }

  getAllCreditRequests(): Observable<CreditRequest[]> {
    const headers = this.getToken();
    return this.http.get<CreditRequest[]>(this.apiUrl, { headers });
  }

  getCreditRequestById(creditRequestId: number): Observable<CreditRequest> {
    const headers = this.getToken();
    return this.http.get<CreditRequest>(`${this.apiUrl}/${creditRequestId}`, { headers });
  }

  approveCreditRequest(creditRequestId: number, approve: boolean): Observable<CreditRequest> {
    const headers = this.getToken();
    return this.http.put<CreditRequest>(`${this.apiUrl}/approve/${creditRequestId}`, { approve }, { headers });
  }
}
