import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StackoverflowApi } from './stackoverflow-api';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowApiService {

  http = inject(HttpClient);

  readonly topTenQuestions$ = this.getTopTenQuestions();

  getTopTenQuestions() : Observable<StackoverflowApi>{
    return this.http.get<StackoverflowApi>('https://api.stackexchange.com/2.3/questions?pagesize=10&fromdate=1641168000&todate=1684454400&order=desc&sort=activity&site=stackoverflow')
  }
}
