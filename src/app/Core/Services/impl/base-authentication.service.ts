import { Injectable } from '@angular/core';
import { IbaseAuthService } from '../interfaces/base-service-authentication.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseAuthenticationService<T> implements IbaseAuthService<T> {

  constructor(private httpclient:HttpClient) { }

    setLocalToken(token: string): string {
        localStorage.setItem('token',token)
        return token;
    }

    getLocalToken():string{
        let token=localStorage.getItem('token')
        if(!token){
          token="";
        }
        console.log(token)
        return token;
      }

    register(data: T): Observable<T> {
        throw new Error('Method not implemented.');
    }
    login(data: T): Observable<T> {
        throw new Error('Method not implemented.');
    }
    verificateToken(token: string): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

}
