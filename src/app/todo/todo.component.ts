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
