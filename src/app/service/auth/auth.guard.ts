import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGurdService } from '../../server/auth-gurd.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthGurdService,private router: Router)  { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.auth.connected()){
      return true
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
}