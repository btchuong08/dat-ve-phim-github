import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('accessToken');
    let  resolve :boolean = false;
    if (token != null ) {
       resolve = true;
    } 
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return resolve;
  }
}