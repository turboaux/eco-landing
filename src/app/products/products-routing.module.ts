import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductSinglePageComponent } from './pages/product-single-page/product-single-page.component';

const routes: Routes = [
  { path: 'products', component: ProductListPageComponent },
  { path: 'products/:id', component: ProductSinglePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
