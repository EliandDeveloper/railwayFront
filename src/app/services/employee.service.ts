import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { endpoind } from '../constant/endpoinds';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(endpoind.GET_EMPLOYEES, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'charset': 'utf-8',
      'Content-Type': 'application/json'
    });
  }
}