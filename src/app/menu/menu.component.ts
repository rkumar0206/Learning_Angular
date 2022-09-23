import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationServiceService } from '../service/harcoded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public harcodedAuthenticationService :
     HarcodedAuthenticationServiceService) { }

  ngOnInit(): void {
  }

}
