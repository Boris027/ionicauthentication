import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTHENTICATION_SERVICE } from '../repository/tokens';
import { IbaseAuthService } from '../Services/interfaces/base-service-authentication.interface';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,
    @Inject(AUTHENTICATION_SERVICE) private auth:IbaseAuthService<User>
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    this.auth.getLocalToken().subscribe({
      next:(value)=>{
          if(value==""){
            this.router.navigate(["/login"])
          }
      },
    })
    
    

    return true;
  }
}