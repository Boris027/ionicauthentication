import { Observable } from "rxjs";
import { IBaseModel } from "../../models/BaseModel.model";
import { Paginated } from "../../models/paginated.model";
import { IBaseService } from "../interfaces/base-service.interface";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BaseService<T extends IBaseModel> implements IBaseService<T>{
    
    getAll(): Observable<T[]>;

    getAll(page: number, pageSize: number): Observable<Paginated<T>>;
    
    getAll(page?: unknown, pageSize?: unknown): import("rxjs").Observable<T[]> | import("rxjs").Observable<import("../../models/paginated.model").Paginated<T>> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Observable<T | null> {
        throw new Error("Method not implemented.");
    }
    add(entity: T): Observable<T> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: T): Observable<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Observable<T> {
        throw new Error("Method not implemented.");
    }

}