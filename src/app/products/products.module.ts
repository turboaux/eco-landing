import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

import { ProductCardModule } from '@ui/product-card/product-card.module';
import { CaloriesMeterModule } from '@ui/calories-meter/calories-meter.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductSinglePageComponent } from './pages/product-single-page/product-single-page.component';

@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductSinglePageComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ProductCardModule,
    CaloriesMeterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
