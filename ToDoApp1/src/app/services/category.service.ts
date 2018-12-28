import { Injectable } from '@angular/core';
import {Category} from '../models/Category';

@Injectable({providedIn:'root'})
export class CategoryService {
  catlist = [
    new Category( 'dac course',false),
    new Category('CDAC1', false),
    new Category('CDAC2', false),
    new Category('CDAC3', false)
    
    
  ];

  constructor() { }
}
