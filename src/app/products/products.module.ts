import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import {ProductsReducer} from './products.reducer';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';
import {SortingPipe} from '../shared/pipe/sorting.pipe'
import { from } from 'rxjs';

@NgModule({
  declarations: [ProductListComponent, ProductCheckoutComponent, ProductsComponent,SortingPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forRoot({ products: ProductsReducer }),
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
