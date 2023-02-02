# RoadMap for learing Angular
Here is a roadmap for learning Angular:

1. Get familiar with HTML, CSS, and JavaScript: Angular is built with these technologies, so a good understanding of them is essential.

2. Learn TypeScript: Angular is written in TypeScript, so it's important to understand the basics of this language.

3. Get an understanding of web development concepts: Angular is a front-end framework, so a basic understanding of web development concepts such as HTTP, REST APIs, and JSON is important.

4. Study the Angular documentation: The Angular documentation is comprehensive and provides a good introduction to the framework and its concepts.

5. Start with the basics: Learn about modules, components, templates, data binding, and services.

6. Learn how to use the Angular CLI: The Angular CLI is a tool that makes it easier to develop, test, and deploy Angular applications.

7. Learn how to work with forms and form validation in Angular.

8. Study the Router: Learn how to configure routes, navigate between routes, and pass parameters to components.

9. Learn about observables and reactive programming: Angular makes heavy use of observables and reactive programming, so it's important to understand these concepts.

10. Study Angular animations: Angular provides a way to add animations to your application.

11. Learn how to use Angular with a backend API: Angular can be used to build full-stack applications.

12. Study advanced topics: Once you have a solid understanding of the basics, you can study more advanced topics such as lazy loading, guards, and custom directives.

13. Build real-world applications: The best way to solidify your learning is to build real-world applications using Angular.

---

# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


---

# Components
https://angular.io/api/core/Component#description

```ts
import { Component } from '@angular/core';

// this component decoration makes this AppCompnent as component.
// Each component contains a template, style and code (typescript)
@Component({
  selector: 'app-root',   // this is defined in index.html file
  templateUrl: './app.component.html',  // location of template file
  styleUrls: ['./app.component.css'] // location of styles file
})
export class AppComponent {
  title = 'todo'; // these variables can be used in our template using {{title}}, this is called interpolation
  message = 'Best todo app on the planet...';
}

```

### Generating a component

Intead of making template, style and code file seperatly we can use `ng generate component NAME` command to generate a component.

![image](https://user-images.githubusercontent.com/63965898/191472837-88c1fd62-bc42-4340-9302-05eff0e85b15.png)

![image](https://user-images.githubusercontent.com/63965898/191473098-aa4cf7b9-2678-4aee-a9bc-2d9533956e14.png)

#### app.modules.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### welcome.component.css

```css


```

#### welcome.component.html

```html
 <p>welcome works!</p>

```

#### welcome.component.ts

```ts
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
```

Now to include this component, we can take the selector name and add it to the `app.component.html` file as 
![image](https://user-images.githubusercontent.com/63965898/191475137-3de45155-96c2-4272-8964-a4a9dc13e64d.png)


---

# Generating LoginComponent and handling events

Step 1 : Generate login component using `ng generate component login`
![image](https://user-images.githubusercontent.com/63965898/191482171-d1fe9c24-81be-4ecc-880f-3c85de7f1db7.png)

Step 2 : For now removing everything from `app.component.html` file and just including the `app-login` component.


Step 3 : Add username and password fields in LoginComponent and adding handleLogin() method

#### login.component.ts
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "rtb";
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
  }
}
```

Step 4 : Create login form in `login.component.html`

#### login.component.html
```html
Username : <input type="text" name="username" value="{{username}}" [(ngModel)]="username">
<br><br>
Password : <input type="password" name="password" value="{{password}}">

<button (click)="handleLogin()">Login</button>
```

Here we are using interpolation for getting the default value of the username and password.
Also we are using `[(ngModel)]=username` which is used to change the value of the username in login.component.ts

Step 5 : Adding FormsModule to `app.modules.ts` for using `ngModel` in our html file

For using the ngModel in our html file we must include FormsModule in app.modules.ts so that we can bind this property to input element.
If we don't include FormsModule in app.modules.ts then we will get below error.

![image](https://user-images.githubusercontent.com/63965898/191487685-df3047ef-4e8d-442c-aa18-0236e35c4b49.png)

#### app.modules.ts

```ts
  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

---

# Routing components

**Step 1 : Modify the `app.component.html` module**
![image](https://user-images.githubusercontent.com/63965898/191582295-62889ca3-96bc-48fd-b2ac-089082d522b2.png)

**Step 2 : Add routes in app-routing.module.ts** 
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // at root path show the LoginComponent
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: ErrorComponent } // all the paths other than defined should route to ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

### Routing from LoginComponent to WelcomeComponent

#### login.component.ts

```ts
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
```

### Adding Route Paramater to `WelcomeComponent`

#### app-routing.module.ts

```ts
....
....
const routes: Routes = [
  { path: '', component: LoginComponent }, // at root path show the LoginComponent
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userName', component: WelcomeComponent }, // Welcome component will take a paramter i.e userName
  { path: '**', component: ErrorComponent } // all the paths other than defined should route to ErrorComponent
];
....
....
```

Modify app-routing.modules.ts for adding parameter to the path of welcome component

#### welcome.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// this component implements an interface called OnInit, in which there is a mehtod called
// ngOnInit() which will be called as soon as this component is initiaized
export class WelcomeComponent implements OnInit {

  userName = ''

  // ActivatedRoute
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.userName = this.route.snapshot.params['userName'];
  }
}

```

#### welcome.component.html

```html
<p>Welcome {{userName}} to our TODO app...</p>

```

#### login.component.ts

```ts
....
  ngOnInit(): void {
  }

  handleLogin() {

    if(this.username === 'rtb' && this.password === '12345')
    {
      this.isInvalidLogin = false;

      this.router.navigate(['welcome', this.username]);

    }else {
      this.isInvalidLogin = true;
    }
  }
....
```

Passing username from LoginComponent to Welcom Component using the path parameter.

---

# Creating ListTodos component

**Step 1: Create ListTodos component using `ng generate component listTodos`**

**Step 2 : Add route to LoginComponent in `app-routing.modules.ts`**

#### app-routing.modules.ts

```ts
....
const routes: Routes = [
  { path: '', component: LoginComponent }, // at root path show the LoginComponent
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userName', component: WelcomeComponent }, // Welcome component will take a paramter i.e userName
  { path: 'todos', component: ListTodosComponent },
  { path: '**', component: ErrorComponent } // all the paths other than defined should route to ErrorComponent
];
....
```

#### list-todos.component.ts

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [

    {id : 1, description : 'Do Lunch'},
    {id : 2, description : 'Learn Angular'},
    {id : 3, description : 'Give the test in Spring boot and Angular'},
    {id : 4, description : 'Prepare for MTECH exams'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

```

#### list-todos.component.html

```html
<table border="1">

    <thead>

        <tr>
            <td>id</td>
            <td>description</td>
        </tr>

    </thead>

    <tbody>

        <tr *ngFor="let todo of todos">

            <td>{{todo.id}}</td>
            <td>{{todo.description}}</td>
        </tr>

    </tbody>


</table>

```

Here we are using `ngFor` directive to use for loop and load the items of the list.

![image](https://user-images.githubusercontent.com/63965898/191592221-b16b3834-ade0-4cdb-9a2e-46875857d157.png)

---

# Linking Todos Component with Welcome Component 

Now we want that a link should be shown in welcome page which navigate to the todos page.

Modify the `welcome.component.html` as below

```html
<div>Welcome {{userName}} to our TODO app...</div>

<div>You can manage your todos <a routerLink="/todos">here</a></div>
```
Here we are using `routerLink` directive to navigate to todos page.

---

## Creating class for Todo

Earlier we created simple object to add todos to the list. Let's refactor that and use a `Todo` class.

Modify the `list-todos.component.ts`

#### list-todos.component.ts

```ts
import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id : Number,
    public description : String,
    public isCompleted : Boolean,
    public targetDate : Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Give the test in Spring boot and Angular', false, new Date()),
    new Todo(3, 'Prepare for MTECH exams', false, new Date()),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
```
#### list-todos.component.html

```html
<table border="1">

    <thead>

        <tr>
            <th>Description</th>
            <th>Target Date</th>
            <th>isCompleted?</th>
        </tr>

    </thead>

    <tbody>

        <tr *ngFor="let todo of todos">
            <td>{{todo.description}}</td>
            <td>{{todo.targetDate | date | uppercase}}</td> <!--the pipe (|) character is used to add formatting to the text in angular-->
            <td>{{todo.isCompleted}}</td>
        </tr>

    </tbody>
</table>

```

![image](https://user-images.githubusercontent.com/63965898/191671622-305a89cc-ea4a-4ab4-b970-a03b1b1c7a0e.png)

---

# Adding Hardcoded Authentication Service

For adding a service class in the Angular we can use the ng command `ng generate service FOLDER/SERVICE_NAME`

![image](https://user-images.githubusercontent.com/63965898/191833419-0911be9c-e73e-4583-b573-bbc26336def1.png)

The above command will create a HardcodedAuthentiationService class in the service folder.

#### harcoded-authentication-service.service.ts

```ts
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

```

We will use this service to authenticate user, earlier the logic was inside the `LoginComponent`.
So moving the logic to the AuthenticationService and injecting the service in LoginComponent.

#### login.component.ts

```ts
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

```

---

# Storing username to session storage

No let's store the username to the browser session storage and we will use this gor checking if the user is already logged in or not. Based on this we will show our menu item.

#### login.component.ts

```ts
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
}

```

#### menu.component.ts

```ts
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

```

#### menu.component.html

```html
<header>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div><a href="https://www.google.com" class="navbar-brand">Google</a></div>

        <ul class="navbar-nav">
            <li><a *ngIf="harcodedAuthenticationService.isUserLoggedIn()" routerLink="/welcome/rtb" class="nav-link">Home</a></li>
            <li><a *ngIf="harcodedAuthenticationService.isUserLoggedIn()" routerLink="/todos" class="nav-link">Todos</a></li>
        </ul>

        <ul class="navbar-nav navbar-collapse justify-content-end">
            <li><a  *ngIf="!harcodedAuthenticationService.isUserLoggedIn()" routerLink="/login" class="nav-link">Login</a></li>
            <li><a  *ngIf="harcodedAuthenticationService.isUserLoggedIn()" routerLink="/logout" class="nav-link">Logout</a></li>
        </ul>

    </nav>

</header>

```

---

# Implementing logout functionality

1. Generate logout component
2. Add routing in `app-routing.module.ts` file.
3. Add logout method in `harcoded-authentication-service.service.ts`

```ts
...
...
  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
 ...
 ...
```

Here we are clearing the session object which we are storing when user is logged in.


#### logout.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationServiceService } from '../service/harcoded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public harcodedAuthenticationService:HarcodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.harcodedAuthenticationService.logout()
  }

}
```

#### logout.component.html

```html
<h1>You are Logged out!!</h1>

<div class="container">

    Thank You for using our Application..

</div>
```

---

## Implementing RouterGauardService

As of now user can directly go to todos / welcome / logout page without authorization. He can just write url path and he will be navigated to that specific page without authentication.

To resolve this we need to Add one RouterGaurdService which implement `CanActivate` class.

Generate A RouterGaurdSerivce using `ng generate service service/RouterGaurd`

![image](https://user-images.githubusercontent.com/63965898/192040483-da710672-3619-450d-a9f3-324df250a52f.png)

#### router-gaurd.service.ts

```ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HarcodedAuthenticationServiceService } from './harcoded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGaurdService implements CanActivate {

  constructor(private harcodedAuthenticationService: HarcodedAuthenticationServiceService,
    private router : Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.harcodedAuthenticationService.isUserLoggedIn()) { return true; }

    this.router.navigate(['/login']); // before returning false we can navigate user to login component

    return false;
  }
}

```

#### app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGaurdService } from './service/router-gaurd.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userName', component: WelcomeComponent, canActivate : [RouterGaurdService]}, 
  { path: 'todos', component: ListTodosComponent, canActivate : [RouterGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate : [RouterGaurdService] },
  { path: '**', component: ErrorComponent } // all the paths other than defined should route to ErrorComponent, Also this should always be placed below of all routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

---

# Using HttpClient to call external Service

In this example we will just call a hello world service and show the response in the welocom.component.ts.

1. Create a WelcomeDataService using `ng generate service service/data/welcomeData`

![image](https://user-images.githubusercontent.com/63965898/192089045-b0a939f8-9668-43aa-bc9e-06854eceded1.png)

#### welcome-data.service.ts

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class HelloWorldBean {

  constructor(public message : string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient : HttpClient) { }

  executeHellowWorldBeanService() {

    //console.log("Inside executeHellowWorldBeanService()");
    return this.httpClient.get<HelloWorldBean>('http://localhost:7879/hello-world');
  }

  executeHellowWorldBeanServiceWithPathVarable(name : string) {

    return this.httpClient.get<HelloWorldBean>(`http://localhost:7879/hello-world/path-variable/${name}`);
  }
}
```

Here we are using HttpClient from Angular for GET request.
We also need to add the HttpClientModule to `app.module.ts`

#### app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### welcome.component.ts

```ts
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

```

#### welcome.component.html

```html
<h1>Welcome!</h1>

<div class="container">

    Welcome {{userName}}. You can manage your todos <a routerLink="/todos">here</a>

</div>

<div class="container">

    Click here to get a customised welcome message.
    <br>
    <button (click)="getWelcomeMessageWithParameter()" class="btn btn-success">Get Welcome message</button>
</div>

<div class="container" *ngIf="welcomMessageFromService">
    <h2>Your Customized Welocome message</h2>
    {{welcomMessageFromService}}
</div>
```

---

# Finalysing TODO using CRUD requests

#### list-todos.component.html

```html
<h1>My Todo's</h1>

<div class="container">

    <div class="alert alert-success" *ngIf='message'>{{message}}</div>

    <table class="table">

        <thead>

            <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>isCompleted?</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>

        </thead>

        <tbody>

            <tr *ngFor="let todo of todos">
                <td>{{todo.description}}</td>
                <td>{{todo.targetDate | date | uppercase}}</td>
                <td>{{todo.completed}}</td>
                <td><button (click)="updateTodo(todo.id)" class="btn btn-success">Update</button></td>
                <td><button (click)="deleteTodo(todo.id)" class="btn btn-warning">Delete</button></td>
            </tr>

        </tbody>
    </table>

    <div class="row">
        <button (click)="addTodo()" class="btn btn-success">Add</button>
    </div>

</div>
```

![image](https://user-images.githubusercontent.com/63965898/192133456-2a6ab462-59a9-462b-94e7-1dd68f5424c5.png)

#### list-todos.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(
    public id : Number,
    public description : String,
    public completed : Boolean,
    public targetDate : Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[] = []

  message = '';

  constructor(private todoService : TodoDataService, private router : Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {

    this.todoService.retriveAllTodos("rtb").subscribe({
      next : (response) => this.todos = response
    })
  }

  deleteTodo(id : any) {

    this.todoService.deleteTodo('rtb', id).subscribe({
      next : (response) => {
        this.message = `Delete of todo ${id} successful`;
        this.refreshTodos();
      }
    })
  }

  updateTodo(id : any) {

    console.log(`Update pressed with id : ${id}`)
    this.router.navigate(['todos', id]);
  }

  addTodo() {

    this.router.navigate(['todos',-1]);
  }

}

```

#### app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGaurdService } from './service/router-gaurd.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // at root path show the LoginComponent
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userName', component: WelcomeComponent, canActivate: [RouterGaurdService] }, // Welcome component will take a paramter i.e userName
  { path: 'todos', component: ListTodosComponent, canActivate: [RouterGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouterGaurdService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouterGaurdService] },

  { path: '**', component: ErrorComponent } // all the paths other than defined should route to ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```


#### todo-data.service.ts

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }

  retriveAllTodos(username : string) {

    return this.httpClient.get<Todo[]>(`http://localhost:7879/users/${username}/todos`);
  }

  deleteTodo(username : string, id : any) {

    return this.httpClient.delete(`http://localhost:7879/users/${username}/todos/${id}`);
  }

  retreiveTodo(username : string, id : any) {

    return this.httpClient.get<Todo>(`http://localhost:7879/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id : any, todo : Todo) {

    return this.httpClient.put<Todo>(`http://localhost:7879/users/${username}/todos/${id}`, todo);
  }

  addTodo(username : string, todo : Todo) {

    return this.httpClient.post<Todo>(`http://localhost:7879/users/${username}/todos`, todo);
  }

}

```

#### todo.component.html

```html
<h1>Todo</h1>

<div class="container">

    <div class="alert alert-warning" *ngIf="todoForm.dirty && todoForm.invalid">Please enter valid values</div>
    <div class="alert alert-warning" *ngIf="todoForm.dirty && description.invalid">Description cannot be empty</div>
    <div class="alert alert-warning" *ngIf="todoForm.dirty && targetDate.invalid">Please enter valid date</div>

    <form (ngSubmit)="!todoForm.invalid && saveTodo()" #todoForm="ngForm">

        <fieldset class="form-group">
            <label for="description">Description</label>
            <input type="text" [(ngModel)]="todo.description" #description="ngModel" name="description" required="required" class="form-control">
        </fieldset>

        <!--ngModel is made of two directives 1. [ngModel] and (ngModelChang)-->
        <fieldset class="form-group">
            <label for="targetDate">Description</label>
            <input type="date"
            [ngModel]="todo.targetDate | date:'yyyy-MM-dd'"
            (ngModelChange)="todo.targetDate = $event"
            name="targetDate" required="required" class="form-control" #targetDate="ngModel">
        </fieldset>

        <button type="submit" class="btn btn-success">Save</button>

    </form>
</div>

```

#### todo.component.css

```css
.ng-invalid:not(form){

    border-left: 3px solid red;
}
```


![image](https://user-images.githubusercontent.com/63965898/192133505-0338b9a1-060e-480f-9b1a-be854e6c6c79.png)

#### todo.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = -1;
  todo: Todo = {} as Todo;
  currDate = new Date()
  minDate = `${this.currDate.getFullYear()}-${this.currDate.getMonth}-${this.currDate.getDay()}`;

  constructor(
    private todoService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params["id"];
    this.todo = new Todo(this.id, '', false, new Date())

    if (this.id != -1) {
      this.todoService.retreiveTodo('rtb', this.id).subscribe({
        next: (response) => {
          this.todo = response;
        }
      })
    }
  }

  saveTodo() {

    if (this.todo.id === -1) {

      //add new todo

      this.todoService.addTodo('rtb', this.todo).subscribe({

        next: (response) => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      })

    } else {

      // update todo
      this.todoService.updateTodo('rtb', this.id, this.todo).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      })
    }
  }

}

```

