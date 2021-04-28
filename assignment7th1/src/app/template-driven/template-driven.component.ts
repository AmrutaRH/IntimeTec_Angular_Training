import { Component, OnInit } from '@angular/core';
import { NgForm ,Validators} from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  formModel = {
    name: '',
    email: '',
    phoneno:'',
    password: '',
    cpassword:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit(contactForm: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(contactForm, null, 4));
  }
}