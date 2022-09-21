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

