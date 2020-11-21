import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<any[]>;
  form:FormGroup;
  sortingList=[
    {
      'title':'Sort by name ASC',
      'sortOrder':'asc',
      'sortBy':'productName'
    },
    {
      'title':'Sort by name DESC',
      'sortOrder':'desc',
      'sortBy':'productName'
    },
    {
      'title':'Sort by price HTL',
      'sortOrder':'desc',
      'sortBy':'price'
    },
    {
      'title':'Sort by price LTH',
      'sortOrder':'asc',
      'sortBy':'price'
    }
  ]
  constructor(private store: Store<{ products: any[] }>) {
    this.products = store.pipe(select('products'));
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = new FormGroup({
      sorting: new FormControl()
    })
  }
}
