import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationServiceService } from '../service/harcoded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private harcodedAuthenticationService:HarcodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.harcodedAuthenticationService.logout()
  }

}
