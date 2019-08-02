import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';


@Component({
    selector: 'app-login',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
    submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
    longitude : any   = 'msankar';
    latitude : any;
    basic : boolean = false;
    constructor( public router: Router) {
    }

    logout(){
        this.router.navigate(["/login/"]);
    }
    getLocation(): void{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
              const longitude = position.coords.longitude;
              const latitude = position.coords.latitude;
              console.log("Latt : " + latitude);
              console.log("Long : " + longitude);
            });
        } else {
           console.log("No support for geolocation")
        }
      }

      getCurrentLocation() : void {
        this.validateBtnState = ClrLoadingState.LOADING;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
              console.log("Latt : " + this.latitude);
              console.log("Long : " + this.longitude);
              this.basic = true;
            });
        } else {
           console.log("No support for geolocation")
        }
        this.validateBtnState = ClrLoadingState.SUCCESS;

    }
}