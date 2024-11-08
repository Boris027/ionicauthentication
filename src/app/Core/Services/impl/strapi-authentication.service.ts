import { Inject, Injectable } from "@angular/core";
import { BaseAuthenticationService } from "./base-authentication.service";
import { IStrapiUser } from "../../models/Strapi-user.model";
import { API_URL_TOKEN, LOCALSTORAGE_ITEM_NAME } from "../../repository/tokens";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { User } from "../../models/User.model";


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



export class StrapiAuthenticationService extends BaseAuthenticationService<User>{

    constructor(
        httpclient:HttpClient,
        @Inject(API_URL_TOKEN) APIURL:string,
        @Inject(LOCALSTORAGE_ITEM_NAME) LOCALSTORAGE_ITEM_NAME:string,
    ){
        super(httpclient,APIURL,LOCALSTORAGE_ITEM_NAME)
    }

    override login(user:User): Observable<string> {
        console.log(LOCALSTORAGE_ITEM_NAME)
        console.log(this.APIURL)
        const body={identifier:user.email,password:user.password}
        return this.httpclient.post(this.APIURL+`/auth/local`,body).pipe(map((c:any)=>{return c.jwt}))
    }

    override register(user:User):Observable<string>{
        const body={username:user.name,password:user.password,email:user.email}
        return this.httpclient.post(this.APIURL+`/auth/local/register`,body).pipe(map((c:any)=>{return c.jwt}))
    }
    

    

}