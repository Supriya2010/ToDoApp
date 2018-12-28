import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { CatFormComponent } from './category/cat-form/cat-form.component';
import { CatEditComponent } from './category/cat-edit/cat-edit.component';


const routes: Routes = [{ path: '', redirectTo: 'todo', pathMatch: 'full' },
{
  path: 'todo',
  component: TodoComponent,
  children: [
    { path: 'new', component: TodoFormComponent },
    { path: 'edit/:id', component: TodoEditComponent }
  ]
},
{
  path: 'category',
  component: CategoryComponent,
  children: [
    { path: 'new', component: CatFormComponent },
    { path: 'edit/:id', component: CatEditComponent }
  ]
},

{ path: 'category', component: CategoryComponent },
{ path: '**', redirectTo: 'todo' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
