import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistics } from '../models/Statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private statisticsApiUrl = '/api/statistics';

  constructor(private http: HttpClient) {}

  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(this.statisticsApiUrl);
  }
}
