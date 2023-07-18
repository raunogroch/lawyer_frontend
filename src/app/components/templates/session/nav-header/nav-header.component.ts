import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutSession } from 'src/app/auth/state/auth.action';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  constructor(private store: Store) {}

  logout(): void {
    this.store.dispatch(logoutSession());
  }
}
