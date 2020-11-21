import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module'
import { EnrolleeComponent } from './enrollee/enrollee.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    EnrolleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
