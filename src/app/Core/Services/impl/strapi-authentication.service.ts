import { Inject, Injectable } from "@angular/core";
import { BaseAuthenticationService } from "./base-authentication.service";
import { IStrapiUser } from "../../models/Strapi-user.model";
import { API_URL_TOKEN, LOCALSTORAGE_ITEM_NAME } from "../../repository/tokens";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";


interface StrapiLoginRecived {
    jwt: string
    user: StrapiUserRecived
  }
  
interface StrapiUserRecived {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
  }
  

@Injectable({
    providedIn: 'root'
})



export class StrapiAuthenticationService extends BaseAuthenticationService<IStrapiUser>{

    constructor(
        httpclient:HttpClient,
        @Inject(API_URL_TOKEN) APIURL:string,
        @Inject(LOCALSTORAGE_ITEM_NAME) LOCALSTORAGE_ITEM_NAME:string,
    ){
        super(httpclient,APIURL,LOCALSTORAGE_ITEM_NAME)
    }

    override login(email:string,password:string): Observable<string> {
        console.log(LOCALSTORAGE_ITEM_NAME)
        console.log(this.APIURL)
        const body={identifier:email,password:password}
        return this.httpclient.post(this.APIURL+`/auth/local`,body).pipe(map((c:any)=>{return c.jwt}))
    }

    

}