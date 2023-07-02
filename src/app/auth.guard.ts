

import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { AuthServiceService } from "./auth-service.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthServiceService,
        private router: Router) { }
    canActivate(){
        if (this.authService.isUserlogIn()) {
         return true;
        }
        this.router.navigate(['/login']);
        return false;
  }
}