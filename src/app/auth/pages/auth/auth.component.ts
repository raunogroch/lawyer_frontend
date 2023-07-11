import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AuthComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  loginForm = this.fb.group({
    username: ['123', Validators.required],
    password: ['abc', Validators.required],
  });

  validarCredenciales(): void {
    /* Este codigo es para verificar el funcionamiento con el localstorage */
    const credentials = {
      name: 'Raul Ariel Noguera Rocha',
      token: 'asdasdasdasdasdasd',
    };
    localStorage.setItem('UUID', JSON.stringify(credentials));
    /* Este codigo es para verificar el funcionamiento con el localstorage */

    this.router.navigate(['dashboard/main']);
  }
}
