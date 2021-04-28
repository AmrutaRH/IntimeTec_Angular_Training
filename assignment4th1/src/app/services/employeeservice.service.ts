import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  employee:any[];

  constructor() {
    this.employee = [
      { id: 1, employee_name: 'Anu Naik',employee_salary:236760,employee_age: 34,profile_image:''},
      { id: 2, employee_name: 'Asha Patil', employee_salary:657780,employee_age: 52 ,profile_image:''},
      { id: 3, employee_name: 'Arun Desai',employee_salary:676870,employee_age: 25 ,profile_image:''}
    ];
  }

  getEmployees() {
    return this.employee;
  }
}
