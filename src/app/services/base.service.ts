import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseService {
    protected baseUrl: string;
  
    constructor(protected http: HttpClient, baseUrl: string) {
      this.baseUrl = baseUrl;
    }
  
    protected get<T>(endpoint: string): Observable<T> {
      return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }
  
    protected post<T>(endpoint: string, body: any): Observable<T> {
      return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
    }
  
    protected put<T>(endpoint: string, body: any): Observable<T> {
      return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
    }
  
    protected delete<T>(endpoint: string): Observable<T> {
      return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
    }
  }