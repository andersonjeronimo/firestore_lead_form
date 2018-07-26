/* import { Injectable } from '@angular/core';

@Injectable()
export class RouteGuard {

  constructor() { }

} */
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AlertService } from '../_services/alert.service';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private router: Router, private alertService: AlertService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /* if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    } */

    if (sessionStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.alertService.error('Necessário autenticação para acessar essa rota', true);
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
