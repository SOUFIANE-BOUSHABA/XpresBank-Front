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



  login(credentials: { username: string, password: string }): Observable<any> {
    return this.httpClient.post<{ token: string, role: string, username: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response: { token: string, role: string, username: string }) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('username', response.username);
        })
      );
  }



  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }


}
