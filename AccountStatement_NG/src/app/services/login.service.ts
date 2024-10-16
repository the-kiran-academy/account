import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginRequest: any): Observable<any> {
    const url = 'http://localhost:8091/auth/login-user';
    return this.http.post(url, loginRequest);
  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('username');
  }


}
