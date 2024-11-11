import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AuthService {


  private apiUrl = '/api/auth';

  constructor( private httpClient:HttpClient) { }

  register(userData : User ):Observable<User>{
    return this.httpClient.post<User>(`${this.apiUrl}/register`,userData)
  }



  login(credentials: { username: string, password: string }): Observable<string> {
    return this.httpClient.post(`${this.apiUrl}/login`, credentials, { responseType: 'text' }).pipe(
      tap((response: string) => {
        localStorage.setItem('token', response);
      })
    );
  }



  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }


}
