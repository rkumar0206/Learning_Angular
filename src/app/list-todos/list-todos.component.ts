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
