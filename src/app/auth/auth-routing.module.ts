import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

const route: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: AuthComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route), CommonModule],
})
export class AuthRoutingModule {}
