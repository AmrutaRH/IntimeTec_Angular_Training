import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from './../../servics/employeeservice.service';
import { Employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee[];

  constructor(private _employeeservice: EmployeeserviceService) {
    
    this.employee = this._employeeservice.getEmployee();
  }

  ngOnInit(): void {

  }
}
