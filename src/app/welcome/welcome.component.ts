import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// this component implements an interface called OnInit, in which there is a mehtod called
// ngOnInit() which will be called as soon as this component is initiaized
export class WelcomeComponent implements OnInit {

  userName = ''
  welcomMessageFromService: string = ''

  // ActivatedRoute
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService
  ) { }

  ngOnInit(): void {

    this.userName = this.route.snapshot.params['userName'];
  }

  getWelcomeMessage() {

    //console.log("Inside getWelcomeMessage()")
    //console.log(this.welcomeDataService.executeHellowWorldBeanService()); // this will give the observable object
    //console.log(this.welcomeDataService.executeHellowWorldBeanService().subscribe()); // this will give the actual response

    this.welcomeDataService.executeHellowWorldBeanService().subscribe({
      next: (resposne) => this.handleSuccesfullResponse(resposne),
      error: (error) => this.handleErrorResponse(error)
    }
    )
  }

  getWelcomeMessageWithParameter() {

    this.welcomeDataService.executeHellowWorldBeanServiceWithPathVarable(this.userName).subscribe({
      next: (resposne) => this.handleSuccesfullResponse(resposne),
      error: (error) => this.handleErrorResponse(error)
    }
    )

  }

  handleSuccesfullResponse(response: HelloWorldBean) {

    this.welcomMessageFromService = response.message;
    console.log(response.message);
  }

  handleErrorResponse(error: any) {

    console.log(error);
    console.log(error.error)
    this.welcomMessageFromService = 'Some Error has happened. Please contat at ***'
  }

}
