import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  
  category: string = "";
  status: boolean = false;


  categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.categoryService.catlist.push(
      new Category(this.category, this.status)
    );

    
    this.category = "";
    this.status = false;
  }

}
