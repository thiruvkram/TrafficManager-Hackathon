import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor( public router: Router) {
    }

    logout(){
        this.router.navigate(["/login/"]);
    }
}