import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeserviceService} from './../../services/employeeservice.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee[];

  constructor(private _employeeservice:EmployeeserviceService) {
    this.employee = _employeeservice.getEmployees();
    console.log(this.employee);
  }

  ngOnInit(): void {
  }

}
