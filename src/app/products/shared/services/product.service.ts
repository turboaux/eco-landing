import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { createClient } from 'contentful';
import { environment } from '@env/environment';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken, 
    environment: environment.contentful.environment
  });

  constructor() {}

  search(criteria: string): Observable<Product[]> {

    return from(this.client.getEntries({
      content_type: environment.contentful.contentTypeIds.products,
      "fields.name[match]": criteria
    }))
    .pipe(
      map(({ items }) => {

        return items.map((entry) => Product.adapt(entry));
      })
    );
  }
}
