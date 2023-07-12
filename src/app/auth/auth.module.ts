import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './state/auth.effects';
import { AuthReducer } from './state/auth.reducer';

@NgModule({
  imports: [
    AuthComponent,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('credentials', AuthReducer),
  ],
})
export class AuthModule {}
