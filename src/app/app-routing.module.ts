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
