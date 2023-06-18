import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaloriesMeterComponent } from './components/calories-meter/calories-meter.component';

@NgModule({
  declarations: [
    CaloriesMeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    CaloriesMeterComponent 
  ]
})
export class CaloriesMeterModule { }
