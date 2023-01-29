export interface signUp{
    username:String,
    password:String,
    email:string,
    role:String
}

export interface login{
    username:String,
    password:String
}
export interface userdetails{
    id:number,
    username:String,
    password:String,
    email:string,
    role:String
}
export interface productdetails{
    id:number,
    productName:number,
    description: String,
    actualPrice: number,
    size: String,
    discount: number,
    category: String,
    color: String,
    imgUrl:String,
    sellerId:number 
}
export interface popularproduct{
    id:number,
    productId:number
}