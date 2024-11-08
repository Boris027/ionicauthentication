import { IBaseModel } from "./BaseModel.model";

export interface Person extends IBaseModel{
    name:string,
    surname:string,
    email:string,
    groupid?:string
}