import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AuthComponent {
  constructor(private fb: FormBuilder) {}
  loginForm = this.fb.group({
    username: ['123', Validators.required],
    password: ['abc', Validators.required],
  });

  validarCredenciales(): void {
    console.log('asdasdasd');
    console.log(this.loginForm.value);
  }
}
