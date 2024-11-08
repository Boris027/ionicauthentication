import { IBaseModel } from "./BaseModel.model";

export interface User extends IBaseModel{
    name:string,
    email:string,
    password:string
}