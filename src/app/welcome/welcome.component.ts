import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// this component implements an interface called OnInit, in which there is a mehtod called
// ngOnInit() which will be called as soon as this component is initiaized
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
