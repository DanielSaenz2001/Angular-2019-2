import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductoDatailsComponent } from './producto-datails/producto-datails.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products',      component: ProductListComponent },
  { path: 'products/:id',      component: ProductoDatailsComponent },
  { path: 'cart',      component: CartComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductoDatailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }