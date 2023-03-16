export interface ProductDb{

}

export interface ubicationInterface{
    country:string|null,
    province:string|null,
    city:string|null,
    direction:string|null,
    postalCode:string|null
}

export interface informationUser{
    cellphone:string|null,
    firstname:string|null,
    lastname:string|null,
    bornDate:Date
}

export interface UserDb {
    email:string,
    password:string
    rol:"CLIENT"|"MANAGER"|"ADMIN",
    validated:boolean,
}