import request from "../config"


export interface UpdateData extends postData{
    category_id:string;
}
export interface postData{
    category_name: string;
}

interface getParams{
    page:number;
    limit:number;
}



interface Category{
    delete : (id:string)=> any,
    post : (data:postData)=> any,
    update : (data:UpdateData)=> any,
    get : (params:getParams)=> any,
}

export interface StoreCategory {
    isLoader:boolean;
    data:any[];
    totlCount:number;
    getData: (params:getParams)=> Promise <any>;
    updateData: (data:UpdateData)=> Promise <any>;
    deleteData: (id:string)=> Promise <any>;
    postData: (data:postData)=> Promise <any>;
}




// ----------------> Instance Category <----------------------------
export const category:Category = {
    post: (data)=> request.post("/category" , data),
    delete: (id)=> request.delete(`/category/${id}`),
    get: (params)=> request.get(`/categories?page=${params.page}&limit=${params.limit}`),
    update: (data)=> request.put(`/category`, data)
}