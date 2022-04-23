import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { MonthStatistic, DayStatistic } from 'src/app/models';

const ANALYTICS_API = 'http://woinbobra.xyz:3000/analytics/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http : HttpClient) { }

  weekly() : Observable<[DayStatistic[],DayStatistic[],DayStatistic[]]> {
    return this.http.get<[DayStatistic[],DayStatistic[],DayStatistic[]]>(ANALYTICS_API + 'weekly', httpOptions);
  } 

  yearly() : Observable<[MonthStatistic[],MonthStatistic[],MonthStatistic[]]> {
    return this.http.get<[MonthStatistic[],MonthStatistic[],MonthStatistic[]]>(ANALYTICS_API + 'yearly', httpOptions);
  } 

}
