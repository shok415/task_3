import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modals/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser;
  constructor() { }

  getUser(): IUser { 
    return this.user;
   };
   
   setUser(user: IUser) {
     return  this.user = user;
   };

}
