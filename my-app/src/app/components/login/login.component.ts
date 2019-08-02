import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    val: String = '';
    errorStatus: String = '';
    basic: Boolean = false;
    username: String = '';
    password: String ='';
    fullName: String ='';
    errorMessage: string;
    regAlert: Boolean = false;

    constructor( public router: Router) {
    }
  
    ngOnInit() {
    }
  
    register() {
      this.basic = false;
    }

    login(){
        this.basic = false;
        this.router.navigate(["/home/"]);
    }
}