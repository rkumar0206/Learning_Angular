import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if(this.username === 'rtb' && this.password === '12345')
    {
      this.isInvalidLogin = false;

      this.router.navigate(['welcome']);

    }else {
      this.isInvalidLogin = true;
    }
  }

}
