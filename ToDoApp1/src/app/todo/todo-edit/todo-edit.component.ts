import { Component, OnInit } from '@angular/core';

import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id;
  cname;

  constructor(
    public toDoService: ToDoService,
    private route: ActivatedRoute,
    cat:CategoryService
  ) 
  {
     this.cname=cat.catlist;
     this.toDoService = toDoService;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
     
  }
  onSubmitClicked1(name:HTMLInputElement,category:HTMLInputElement,status:HTMLInputElement)
  {
       this.toDoService.tasks[this.id].name = name.value;
       this.toDoService.tasks[this.id].category = category.value;
       this.toDoService.tasks[this.id].status = status.checked;

  }

}

