import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService) { }
  canActivate(rute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuth()
  }
}
