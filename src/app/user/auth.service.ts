import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        console.log('In loginUser', userName, password);
        this.currentUser = {
            id: 1,
            firstName: 'Oshie',
            lastName: 'Soffel',
            userName: userName
        }
        console.log('this is currentUser in service', this.currentUser);
        return this.currentUser;
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(formValues) {
        this.currentUser.firstName = formValues.firstName;
        this.currentUser.lastName = formValues.lastName;
        this.currentUser.userName = formValues.userName;
    }
    
}