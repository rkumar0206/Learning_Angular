import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationServiceService } from '../service/harcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "rtb";
  password = '';
  errorMessage = 'Invalid Credentials';

  isInvalidLogin = false;

  // Dependecy Injection
  // For navigating from Login to Welcome page we need the object of Router
  // For getting the router object we will just declare that in the constructor and it will be availbale to use as Angular will inject it
  constructor(private router : Router, private hardcodeAuthenticationService : HarcodedAuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if(this.hardcodeAuthenticationService.authenticate(this.username, this.password))
    {
      this.isInvalidLogin = false;

      this.router.navigate(['welcome', this.username]);

    }else {
      this.isInvalidLogin = true;
    }
  }

}
