import { InjectionToken } from "@angular/core";
import { IbaseAuthService } from "../Services/interfaces/base-service-authentication.interface";

export const API_URL_TOKEN:InjectionToken<string>=new InjectionToken<string>("API_URL_TOKEN")
//para buscar y almacenar el token en localstorage y poner el nombre
export const LOCALSTORAGE_ITEM_NAME:InjectionToken<string>=new InjectionToken<string>("LOCALSTORAGE_ITEM_NAME")
export const RESOURCE_NAME_1:InjectionToken<string>=new InjectionToken<string>("RESOURCE_NAME_1")
export const RESOURCE_NAME_2:InjectionToken<string>=new InjectionToken<string>("RESOURCE_NAME_2")
export const AUTHENTICATION_SERVICE=new InjectionToken<IbaseAuthService<any>>("AUTHENTICATION_SERVICE")