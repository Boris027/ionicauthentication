import { Inject, Injectable } from '@angular/core';
import { IbaseAuthService } from '../interfaces/base-service-authentication.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBaseModel } from '../../models/BaseModel.model';
import { API_URL_TOKEN, LOCALSTORAGE_ITEM_NAME } from '../../repository/tokens';

@Injectable({
  providedIn: 'root'
})
export class BaseAuthenticationService<T extends IBaseModel> implements IbaseAuthService<T> {

  constructor(
    protected httpclient:HttpClient,
    @Inject(API_URL_TOKEN) protected APIURL:string,
    @Inject(LOCALSTORAGE_ITEM_NAME) protected LOCALSTORAGE_ITEM_NAME:string,
  ) { }

    setLocalToken(token: string): string {
        localStorage.setItem(this.LOCALSTORAGE_ITEM_NAME,token)
        return token;
    }

    getLocalToken():string{
        let token=localStorage.getItem(this.LOCALSTORAGE_ITEM_NAME)
        if(!token){
          token="";
        }
        return token;
      }

    register(data: T): Observable<T> {
        throw new Error('Method not implemented.');
    }
    login(email:string,password:string): Observable<string> {
        throw new Error('Method not implemented.');
    }
    verificateToken(token: string): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

}
