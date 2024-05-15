import request from "../config"

export interface PostData{
    age_max: number,
    category_id: string,
    age_min: number,
    cost: number,
    color: boolean,
    description: string,
    discount:number,
    count: number,
    made_in: string,
    product_name: string,
    size: number
    for_gender: string,
}

export interface UpdateData extends PostData{
    product_id: string,
}

interface getParams{
    page:number;
    limit:number;
}



interface Product{
    post : (data:PostData)=> any,
    delete : (id:string)=> any,
    get : (params:getParams)=> any,
    update : (data:UpdateData)=> any,
}

export interface StoreProduct {
    isLoader:boolean;
    data:any[];
    totlCount:number;
    idData:string[]
    getProduct: (params:getParams)=> Promise <any>;
    getIdProduct: (id:string | undefined)=> Promise <any>;
    postProduct: (data:PostData)=> Promise <any>;
    deleteProduct: (id:string)=> Promise <any>;
    updateProduct: (data:UpdateData)=> Promise <any>;
}




export const product:Product = {
    post: (data)=> request.post("/product" , data),
    delete: (id)=> request.delete(`/product/${id}`),
    get: (params)=> request.get(`/products`, {params}),
    update: (data)=> request.put(`/product`, data)
}