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
