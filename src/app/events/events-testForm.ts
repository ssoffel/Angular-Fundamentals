import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
 

 export interface IForm {
    id: number;
    firstName: string;
    lastName: string;
 }

@Component({
    selector: 'app-form',
    templateUrl: 'events-createSession.component.html',
    styles: [`
    `]
};

export class CreateSessionComponet implements OnInit {
 newSessionForm: FormGroup;
 firstName;
 lastname:

    ngOnInit() {
        this.firstName = new FormControl('', Validators.required)
        this.lastName = new FormControl('', Validators.required)

        this.newSessionForm = new FormGroup({
            firstName = this.firstName,
            lastName = this.lastName
        })
    }

    processForm(form) {
        const form: IForm = {
            id: undefined,
            firstName: form.firstName,
            lastName: form.lastName
        }

    };
}
