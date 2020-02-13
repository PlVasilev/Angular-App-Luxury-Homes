import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserServiceLH } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged = false;
  isAdmin = false;

  constructor(
      private userService: UserServiceLH,
      private router: Router
      ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.userService.user){
        this.isLogged = true       
    }
    if (this.isLogged === route.data.isLogged){
        return true;
    }else{
        this.router.navigateByUrl('/notauthorized');
    }
  }
}