import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      return true; // User is authenticated, allow access
    } else {
      alert("Login First");
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }
}
