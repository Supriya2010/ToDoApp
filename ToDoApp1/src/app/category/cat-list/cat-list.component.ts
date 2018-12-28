import { Component, OnInit} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  todos;
  
  constructor(categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.todos = categoryService.catlist;
  }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
    }


  onEditButtonClicked1(index) {
    this.router.navigate(['/category', 'edit', index]);
}
}
