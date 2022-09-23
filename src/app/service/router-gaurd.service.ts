import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HarcodedAuthenticationServiceService } from './harcoded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGaurdService implements CanActivate {

  constructor(private harcodedAuthenticationService: HarcodedAuthenticationServiceService,
    private router : Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.harcodedAuthenticationService.isUserLoggedIn()) { return true; }

    this.router.navigate(['/login']);

    return false;
  }
}
