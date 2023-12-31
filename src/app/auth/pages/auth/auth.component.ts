import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../../state/auth.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AuthComponent {
  constructor(private fb: FormBuilder, private store: Store) {}
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  validarCredenciales(): void {
    this.store.dispatch(loginStart({ credentials: this.loginForm.value }));
  }
}
