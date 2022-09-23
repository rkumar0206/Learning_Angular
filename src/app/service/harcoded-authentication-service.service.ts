import { Injectable } from '@angular/core';

// @Injectable makes this class available for depedency injection, angular will inject it wherever we want the instance of
// this service class
@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationServiceService {

  constructor() { }

  authenticate(username : string, password : string) {

    if (username === 'rtb' && password === 'dummy') {

      sessionStorage.setItem("authenticatedUser", username);
      return true
    }
      return false
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

}
