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

## Components
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

## Generating LoginComponent and handling events

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

## Routing components

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

## Creating ListTodos component

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

## Linking Todos Component with Welcome Component 

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

## Adding Hardcoded Authentication Service

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

## Storing username to session storage

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

## Implementing logout functionality

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
