import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  
  @Input() name: string = '';
  @Input() featureImage: string = '';
}
