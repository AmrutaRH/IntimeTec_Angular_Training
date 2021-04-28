import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

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
     name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email: ['', [Validators.required,Validators.email]],
      address: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
      city: ['',[ Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      phoneno: ['',[ Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['',[ Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(10)]]
    }, 
    {      
      validators: this.mustMatch('password', 'confirmPassword')
    })
  }
  onFormSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    
  }
  get f() {
    return this.registerForm.controls;
  }

  mustMatch(password: string, confirmPassword: string) {
    //return password === confirmPassword; // going to through an error
    return (formGroup: FormGroup) => {
      const pwd = formGroup.controls[password];
      const cnfPwd = formGroup.controls[confirmPassword];

      if (pwd.value !== cnfPwd.value) {
        cnfPwd.setErrors({
          mustMatch: true
        });
      } else {
        cnfPwd.setErrors(null);
      }
    }
  }
}
