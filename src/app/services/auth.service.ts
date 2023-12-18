import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const TOKEN_KEY = 'auth-token';
const token: string =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI5NDJiZWE0YzI2ZjM1OTUyODU4NDM3ZmZjMjVhNyIsInN1YiI6IjY1ODA2ZjYyZGY4NmE4MDhkYWU4MjdjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-0qA_thWWkt0iWe8T8DTrB-fuqhEc0c-_G-Ck1ycH4';
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
      window.sessionStorage.setItem(TOKEN_KEY, token);
      return true;
    }
    return false;
  };
}
