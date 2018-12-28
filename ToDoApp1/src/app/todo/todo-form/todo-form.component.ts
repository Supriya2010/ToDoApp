import { Component, OnInit} from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDo } from 'src/app/models/ToDo';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  name: string = "";
  category: string = "";
  status: boolean = false;

cname;
  toDoService: ToDoService;
  
  constructor(toDoService: ToDoService,cat:CategoryService) {
    this.toDoService = toDoService;
    this.cname=cat.catlist ;
    
  }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDo(this.name, this.category, this.status)
    );

    this.name = "";
    this.category = "";
    this.status = false;
  }
}
