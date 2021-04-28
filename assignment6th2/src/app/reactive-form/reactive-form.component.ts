import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  title = 'reactive-forms-demo';
  registerForm: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     name: [''],
      email: [''],
      address: [''],
      city: [''],
      phoneno: [''],
      password: [''],
      confirmPassword: ['']
    })
  }
  onFormSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    
  }
}
