import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

const routes: Routes = [
  { path: 'products', component: ProductListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
