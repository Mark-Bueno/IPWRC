import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router, private authService: AuthService, private userService: UserService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      this.userService.getAuthenticatedUser().subscribe(({role: userRole}) => {
        if (route.data.role !== userRole && route.data.role) {
          this.router.navigate(['/404']).then();
          return false;
        }
      });
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then();
    return;
  }
}
