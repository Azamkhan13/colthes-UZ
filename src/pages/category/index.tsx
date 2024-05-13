import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import useCategoryStore from "../../store/category"
import { Table } from "../../components"
import {CategorMadalAdd} from "../../components"

function index() {
  const [countPage , ] = useState(1)
  const [countLimit , ] = useState(10)
  const {isLoader , data , getData , deleteData, } = useCategoryStore()


  useEffect(()=>{
    getData({page:countPage, limit:countLimit})
  },[])

 
  const theder = [
        // {title: "" , value:"id"},
        {title: "T/r" , value:"t/r"},
        {title: "Category" , value:"category_name"},
        {title: "Category_id" , value:"category_id"},
        {title: "Action" , value:"action"}
  ]
  return <>
    <ToastContainer/>
    <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          
         <CategorMadalAdd/>
        </div>
    </div>

    <Table heders={theder} body={data} skelatonLoader={isLoader} deletIdData={deleteData}/>
  </>
}

export default index