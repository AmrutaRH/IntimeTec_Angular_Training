import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './../components/employee/employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employee: Employee[];

  constructor(private http: HttpClient) {
    this.employee = [];
  }

  getEmployee() {
    this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe(data => {
        this.employee = data;
      });
    
    return this.employee;
  }

}
