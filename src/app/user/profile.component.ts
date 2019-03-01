import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
         em {float: right; color: #E05C65 }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
  
})

export class ProfileComponent implements OnInit {
    firstName;
    lastName;
    userName;
    formProfile: FormGroup;
    constructor(private authService: AuthService,
                private router: Router,
                @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }
    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
        Validators.pattern('[a-zA-Z].*')] );
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, 
        Validators.pattern('[a-zA-Z].*')]);
        this.userName = new FormControl(this.authService.currentUser.userName, Validators.required);
        
        this.formProfile = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName
        }
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    save(formProfile) {

        if (this.formProfile.valid) {
        this.authService.updateCurrentUser(formProfile.value);
        this.toastr.success('Profile Saved');
        } else {
            this.toastr.error('Profile was not saved!!');
        }
    }

    validateFirstName() {
       if( this.formProfile.controls.firstName.invalid &&
        this.formProfile.controls.firstName.touched) {
            return true;
        } else {
            return false;
        }
    }
    validateLastName() {
        if( this.formProfile.controls.lastName.invalid &&
            this.formProfile.controls.lastName.touched) {
                return true;
            } else {
                return false;
            }
    }
    validateUserName() {
        if( this.formProfile.controls.userName.invalid &&
            this.formProfile.controls.userName.touched){
                return true;
            } else {
                return false;
            }
    }
}