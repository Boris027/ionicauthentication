import { Inject, Injectable } from '@angular/core';
import { IbaseAuthService } from '../interfaces/base-service-authentication.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBaseModel } from '../../models/BaseModel.model';
import { API_URL_TOKEN, LOCALSTORAGE_ITEM_NAME } from '../../repository/tokens';

@Injectable({
  providedIn: 'root'
})
export class BaseAuthenticationService<T extends IBaseModel> implements IbaseAuthService<T> {

  private token: BehaviorSubject<string>;

  constructor(
    protected httpclient:HttpClient,
    @Inject(API_URL_TOKEN) protected APIURL:string,
    @Inject(LOCALSTORAGE_ITEM_NAME) protected LOCALSTORAGE_ITEM_NAME:string,
  ) {
    const token = localStorage.getItem(this.LOCALSTORAGE_ITEM_NAME) || '';
    this.token = new BehaviorSubject<string>(token);
   }


    setLocalToken(token: string): string {
        localStorage.setItem(this.LOCALSTORAGE_ITEM_NAME,token)
        this.token.next(token); // Emitimos el nuevo valor
        return token;
    }

    getLocalToken():Observable<string>{

      return this.token.asObservable();

    }

    register(data: T): Observable<string> {
      throw new Error('Method not implemented.');
    }
    login(data: T): Observable<string> {
      throw new Error('Method not implemented.');
    }
    
    verificateToken(token: string): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

}
