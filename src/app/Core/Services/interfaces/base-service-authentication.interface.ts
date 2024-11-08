import { Observable } from "rxjs"

export interface IbaseAuthService<T> {

    getLocalToken():string
    setLocalToken(token:string):string
    register(data:T):Observable<T>
    login(data:T):Observable<T>
    verificateToken(token:string):Observable<boolean>

}