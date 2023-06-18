import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { AuthService } from './auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscriptions = new SubSink();

  userName: string = '';
  userAvatar: string = ''; 

  constructor(private readonly auth: AuthService ) {}

  ngOnInit(): void {

    // Just for demo purposes.    
    this.subscriptions.sink = this.auth.getUser('5kywKaD2wkNpXLBZGhX7lx')
    .subscribe(({ name, avatar }) => {

      this.userName = name; 
      this.userAvatar = avatar;
    }); 
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
