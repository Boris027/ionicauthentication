import { Injectable } from "@angular/core";
import { BaseService } from "./Base.service";
import { Person } from "../../models/Person.model";

@Injectable({
    providedIn: 'root'
})

export class peopleService extends BaseService<Person>{

    constructor(){
        super();
    }

}