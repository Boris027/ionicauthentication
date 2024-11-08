import { IBaseModel } from "./BaseModel.model";

export interface IStrapiUser extends IBaseModel{
    username:string,
    email:string,
    password:string
}