import { Injectable } from "@angular/core";
import { BaseService } from "./Base.service";
import { Group } from "../../models/Group.model";

@Injectable({
    providedIn: 'root'
})

export class groupService extends BaseService<Group>{

    constructor(){
        super();
    }

}