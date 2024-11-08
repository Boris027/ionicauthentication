import { FactoryProvider } from "@angular/core";
import { API_URL_TOKEN, AUTHENTICATION_SERVICE, LOCALSTORAGE_ITEM_NAME } from "./tokens";
import { HttpClient } from "@angular/common/http";
import { IbaseAuthService } from "../Services/interfaces/base-service-authentication.interface";
import { IStrapiUser } from "../models/Strapi-user.model";
import { StrapiAuthenticationService } from "../Services/impl/strapi-authentication.service";
import { User } from "../models/User.model";



function StrapiAuthenticationServiceFactory(httpclient:HttpClient,apiurl:string,localstorageitemname:string):IbaseAuthService<User>{
    return new StrapiAuthenticationService(httpclient,apiurl,localstorageitemname)
}


export const FactoryAuthenticationService:FactoryProvider ={ 
    provide: AUTHENTICATION_SERVICE,
    deps:[HttpClient,API_URL_TOKEN,LOCALSTORAGE_ITEM_NAME],
    useFactory:(httpclient:HttpClient,apiurl:string,localstorageitemname:string)=>{
        return StrapiAuthenticationServiceFactory(httpclient,apiurl,localstorageitemname)

    }
  };

