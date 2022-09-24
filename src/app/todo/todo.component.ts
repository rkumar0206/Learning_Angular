import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number = -1;
  todo: Todo = {} as Todo;

  constructor(
    private todoService : TodoDataService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.id =  this.activatedRoute.snapshot.params["id"];
    this.todoService.retreiveTodo('rtb' ,this.id).subscribe({
      next: (response) => {
        this.todo = response;
      }
    })
  }

  saveTodo() {

  }

}
