import { IBaseModel } from "./BaseModel.model";

export interface User extends IBaseModel{
    nombre:string,
    correo:string,
    contraseña:string
}