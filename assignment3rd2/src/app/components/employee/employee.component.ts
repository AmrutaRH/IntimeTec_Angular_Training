import { Component, OnInit } from '@angular/core';
import { employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: employee[];
  edit: boolean = true;
  show:boolean=false;
  editEmp() {
    this.edit = !this.edit;
    this.show=!this.show;
  }

  updateEmp() {
    this.edit = !this.edit;
    this.show=!this.show;
  }
  

  constructor() {

    this.employees = [
      { employeeid: 1, fname: 'Anu',  city: 'Banglore', email: 'anu@gmail.com' ,salary:30000,dob:new Date( Math.random())},
      { employeeid: 2, fname: 'Asha',  city: 'Belagavi', email: 'asha@gmail.com' ,salary:40000,dob:new Date( Math.random())},
      { employeeid: 3, fname: 'Arun',  city: 'Mysore', email: 'arun@gmail.com',salary:35000,dob:new Date( Math.random() )}
    ];

  }

  ngOnInit(): void {
  }

}