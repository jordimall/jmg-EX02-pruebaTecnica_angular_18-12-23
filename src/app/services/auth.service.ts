import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


const user_defult: User = new User();
user_defult.userName = 'user';
user_defult.password = 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  loggin = (user: User): boolean => {
    if (
      user_defult.password === user.password &&
      user_defult.userName === user.userName
    ) {
      return true;
    }
    return false;
  };
}
