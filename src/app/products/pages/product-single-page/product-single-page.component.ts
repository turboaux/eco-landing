import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../../shared/services/product.service';
import { ProductDetail } from '../../shared/models/product-detail';

@Component({
  selector: 'app-product-single-page',
  templateUrl: './product-single-page.component.html',
  styleUrls: ['./product-single-page.component.scss']
})
export class ProductSinglePageComponent implements OnInit {

  product$!: Observable<ProductDetail>;

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly product: ProductService
  ) {}

  ngOnInit(): void {
    
    const productId: string | null = this.route.snapshot.paramMap.get('id'); 

    // TODO: crear un módulo de manejo de errores.
    if (!productId) { return; }

    this.product$ = this.product.get(productId);
  }

  goBack(): void {

    this.location.back();
  }
}
