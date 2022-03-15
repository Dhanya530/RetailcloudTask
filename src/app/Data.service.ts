import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<HttpResponse<any>> {  
    const requestUrl = `https://jsonplaceholder.typicode.com/posts`;
    const response = this.httpClient.get<any>(requestUrl, {
      observe: 'response',
    });
    return response;
  }
}
