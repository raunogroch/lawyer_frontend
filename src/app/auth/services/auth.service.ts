import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredentials } from 'src/app/models/Credential.model';
import { IUser } from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  API_BASE_URL = 'http://localhost:8000/api';

  login(credentials: ICredentials): Observable<IUser> {
    const url = this.API_BASE_URL;
    return this.http.post<IUser>(`${url}/auth/login`, credentials);
  }
}
