import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { createClient } from 'contentful';
import { environment } from '@env/environment';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken, 
    environment: environment.contentful.environment
  });

  constructor() { }

  getUser(id: string): Observable<User> {

    return from(this.client.getEntry(id))
      .pipe(
        map((entry) => User.adapt(entry))
      );
  }
}
