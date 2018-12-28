import { Component, OnInit } from '@angular/core';
import {Category} from '../models/Category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers :[CategoryService]
})
export class CategoryComponent implements OnInit {
  category;


  task: Category;
  index: number;

  

  constructor(categoryService: CategoryService) { 
    this.category = categoryService.catlist;
  }


  ngOnInit() {
  }

  
    
}
