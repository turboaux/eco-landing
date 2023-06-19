import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from '@ui/navbar/navbar.module';
import { FooterModule } from '@ui/footer/footer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule, 
    FooterModule,
    HomeModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
