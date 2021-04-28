import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../Modals/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789,./[]\=-)(*&^%$#@!~';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }
  userForm(form: NgForm) {
    let name = form.value.user_name;
    let mobile_no = form.value.user_mobile;
    let email = form.value.user_email;
    let user: User = {
      $key: this.makeString(),
      user_email: email,
      mobile: mobile_no,
      user_name: name
    }

    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(['/veiw-ticket']);
  }

  journey: any = JSON.parse(localStorage.getItem("journey") || "{}");


}
