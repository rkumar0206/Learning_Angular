import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {

    if(this.username === 'rtb' && this.password === '12345')
    {
      this.isInvalidLogin = false;
    }else {
      this.isInvalidLogin = true;
    }
  }

}
