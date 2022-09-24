import { Component, OnInit } from '@angular/core';
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
  // = [
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(2, 'Give the test in Spring boot and Angular', false, new Date()),
  //   new Todo(3, 'Prepare for MTECH exams', false, new Date()),
  // ];

  message = '';

  constructor(private todoService : TodoDataService) { }

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

}
