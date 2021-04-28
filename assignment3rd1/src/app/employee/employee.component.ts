import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data:Array<any>;

  constructor() {
    this. data = [
      { employeeid: '1', fname: 'Anu', lname: 'Naik', dept: 'CS', city: 'Banglore', email: 'anu@gmail.com' },
      { employeeid: '2', fname: 'Asha', lname: 'Patil', dept: 'EC', city: 'Belagavi', email: 'asha@gmail.com' },
      { employeeid: '3', fname: 'Arun', lname: 'Desai', dept: 'CS', city: 'Mysore', email: 'arun@gmail.com' }
    ];
  }

  ngOnInit(): void {
  }

}
