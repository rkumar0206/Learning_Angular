import { Injectable } from '@angular/core';

// @Injectable makes this class available for depedency injection, angular will inject it wherever we want the instance of
// this service class
@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationServiceService {

  constructor() { }

  authenticate(username : String, password : String) {

    if (username === 'rtb' && password === '12345') {
      return true
    }
      return false
  }
}
