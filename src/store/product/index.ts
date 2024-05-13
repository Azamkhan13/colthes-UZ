
import { create } from 'zustand' ;
import { toast } from 'react-toastify'; 
import { product ,StoreProduct } from '../../service/product';
import http from '../../service/config';


const useProductStore = create <StoreProduct> ((set)=>({
    isLoader: false,
    data: [],
    totlCount: 0,
    idData: [],
    getProduct : async(data)=>{
        try{
           set({isLoader: true})
           const respons = await product.get(data)
        //    console.log(respons)
           if(respons.status === 200){
               set({data: respons?.data?.products});
               set({totlCount: respons?.data?.total_count})
           }
           set({isLoader: false})
       }catch(error:any){
        console.log(error)
        toast.error("Error : " + error?.message);
       }
       
    },
    postProduct: async(data)=>{
        try{
           const respons = await product.post(data)
           console.log(respons)
           if(respons.status === 201){
               set((state)=>({data:[...state.data, {...data, product_id: respons?.data?.product_id}]})) 
               toast.success("success full")
               return respons?.status
           }
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    },
    deleteProduct: async(id)=>{
        try{
           const respons = await product.delete(id)
        //    console.log(respons)
           if(respons.status === 200){
               set((state)=>({data: state.data.filter((el:any)=>el.product_id !== id)})) 
               toast.success("Deleted successfully")
           }
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    },
    updateProduct: async(data)=>{
        try{
        const respons = await product.update(data)
        if(respons?.status ===200){
            set((state)=>({data: state.data.map((el:any)=>el.product_id  === data.product_id ? data : el)}))
            toast.success("updated successfully")
            return respons?.status
        }
        
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    },
    getProductbyId: async(id:any)=>{
        try{
            const response = await http.get(`http://store.go-clothes.uz:5555/v1/product/${id}`)
            set({idData: response?.data});

        }catch(err){
            toast.error('Something error')
        }
    }

}))

export default useProductStore