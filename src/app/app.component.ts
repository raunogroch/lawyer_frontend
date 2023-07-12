import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lawyer_frontend';
  showLoading$: Observable<boolean> | undefined;
  errorMessage$: Observable<string | null> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showLoading$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
  }
}
