import { Injectable } from '@angular/core';

const TOKEN: string =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI5NDJiZWE0YzI2ZjM1OTUyODU4NDM3ZmZjMjVhNyIsInN1YiI6IjY1ODA2ZjYyZGY4NmE4MDhkYWU4MjdjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e-0qA_thWWkt0iWe8T8DTrB-fuqhEc0c-_G-Ck1ycH4';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, TOKEN);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}
