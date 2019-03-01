import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
     em { float: right; color: #E05C65; padding-left: 1em; }
    `]
})

export class LoginComponent{
    userName;
    password;
    mouseoverLogin;
    
    //must declare your variables if your using ngModel

    constructor(private authService: AuthService,
                private route: Router) {

    }

    login(formValues){
        console.log('this is login function', formValues.userName, formValues.password);
        this.authService.loginUser(formValues.userName, formValues.password);

        if (this.authService.isAuthenticated()) {
            this.route.navigate(['/events']);
        }
    }
}