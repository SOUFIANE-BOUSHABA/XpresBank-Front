
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  private getToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAllUsers(): Observable<User[]> {
    const headers = this.getToken();
    return this.http.get<User[]>(`${this.apiUrl}`, { headers });
  }

  getUserById(id: number): Observable<User> {
    const headers = this.getToken();
    return this.http.get<User>(`${this.apiUrl}/${id}`, { headers });
  }

  createUser(user: User): Observable<User> {
    const headers = this.getToken();
    return this.http.post<User>(`${this.apiUrl}/create`, user, { headers });
  }

  updateUser(id: number, user: User): Observable<User> {
    const headers = this.getToken();
    return this.http.put<User>(`${this.apiUrl}/${id}`, user, { headers });
  }

  deleteUser(id: number): Observable<void> {
    const headers = this.getToken();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers, responseType: 'text' as 'json' });
  }
}
