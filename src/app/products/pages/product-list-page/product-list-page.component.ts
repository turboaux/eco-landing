import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  products$!: Observable<Product[]>;
  private searchProducts = new Subject<string>();

  constructor(private readonly product: ProductService) {}

  ngOnInit(): void {
    
    this.products$ = this.searchProducts
        .pipe(
          startWith(''),
          debounceTime(300),
          distinctUntilChanged(), 
          switchMap((criteria) => this.product.search(criteria))
        );
  }

  search(criteria: string): void {

    this.searchProducts.next(criteria);
  }
}
