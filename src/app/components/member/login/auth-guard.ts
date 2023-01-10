import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{

    constructor(
        private loginService: LoginService,
        private router: Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean>{
          return this.loginService.user.pipe(map(
            user => {
              const isAuthenticated = !!user;
              if(isAuthenticated){
                return true;
              }
              alert("You are not allowed to view this page.");
              return this.router.createUrlTree(['/login']);
            }
          )
          )  
          
    }
}