import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import useCategoryStore from "../../store/category"
import { Table } from "../../components"
import {CategorMadalAdd} from "../../components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function index() {
  const [countPage , setCountPage] = useState(1);
  const [countLimit] = useState(0);
  const {isLoader , data , getData , deleteData, totlCount} = useCategoryStore()
 
  const allCount = Math.ceil(totlCount/ countLimit)

  useEffect(()=>{
    getData({page:countPage, limit:5})
  },[countPage])

 
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
    <div className="flex items-center justify-end gap-3">
      <button onClick={()=>{setCountPage(countPage - 1)}} disabled={countPage == 1} className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "><ArrowLeftIcon/></button>
      <span className="text-[20px] text-center">{countPage}</span>
      <button onClick={()=>{setCountPage(countPage + 1)}} disabled={countPage == allCount}  className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "><ArrowRightIcon/></button>
    </div>
  </>
}

export default index