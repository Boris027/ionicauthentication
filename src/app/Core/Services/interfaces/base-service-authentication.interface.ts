import { Observable } from "rxjs"

export interface IbaseAuthService<T> {

    getLocalToken():Observable<string>
    setLocalToken(token:string):string
    register(data:T):Observable<string>
    login(data:T):Observable<string>
    verificateToken(token:string):Observable<boolean>

}