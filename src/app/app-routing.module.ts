import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedGuard } from './guard/logged.guard';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './components/templates/login/login.component';
import { SessionComponent } from './components/templates/session/session.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivateChild: [authGuard],
  },
  {
    path: 'dashboard',
    component: SessionComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivateChild: [loggedGuard],
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
