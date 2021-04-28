import { Component, OnInit } from '@angular/core';
import { employee } from './employee';
@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
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
      { employeeid: 1, fname: 'Anu', lname: 'Naik', dept: 'CS', city: 'Banglore', email: 'anu@gmail.com' },
      { employeeid: 2, fname: 'Asha', lname: 'Patil', dept: 'EC', city: 'Belagavi', email: 'asha@gmail.com' },
      { employeeid: 3, fname: 'Arun', lname: 'Desai', dept: 'CS', city: 'Mysore', email: 'arun@gmail.com' }
    ];

  }

  ngOnInit(): void {
  }

}
