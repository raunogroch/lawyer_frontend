import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from './auth/state/auth.reducer';
import { AuthEffects } from './auth/state/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoaderComponent } from './components/loader/loader.component';
import { appReducer } from './store/app.state';
import { SessionComponent } from './components/templates/session/session.component';
import { LoginComponent } from './components/templates/login/login.component';
import { NavigationComponent } from './components/templates/session/navigation/navigation.component';
import { NavHeaderComponent } from './components/templates/session/nav-header/nav-header.component';
import { FooterComponent } from './components/templates/session/footer/footer.component';
import { BreadcumbComponent } from './components/templates/session/breadcumb/breadcumb.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, SessionComponent, LoginComponent, NavigationComponent, NavHeaderComponent, FooterComponent, BreadcumbComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
