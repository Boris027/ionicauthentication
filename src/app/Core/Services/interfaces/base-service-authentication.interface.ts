import { Observable } from "rxjs"

export interface IbaseAuthService<T> {

    getLocalToken():string
    setLocalToken(token:string):string
    register(data:T):Observable<T>
    login(email:string,password:string):Observable<string>
    verificateToken(token:string):Observable<boolean>

}