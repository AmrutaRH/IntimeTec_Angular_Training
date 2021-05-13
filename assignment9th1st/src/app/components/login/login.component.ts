import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;
  error: string = '';
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // make an API call
    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        this.loading = false;
        this.router.navigate(['/home']);
      }, error => {
        this.loading = false;
        this.error = error;
      })


    console.log(JSON.stringify(this.loginForm.value));
  }

}

