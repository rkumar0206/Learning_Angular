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
