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
