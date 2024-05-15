// import GlobalTable from '../../components/ui/table'
import GlobolTable from "../../components/ui/globol-table"
import { WorkerModalAdd } from '../../components';
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import useWorkerstore from "../../store"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const index = () => {
  const [countPage , setCountPage] = useState(1);
  const [countLimit] = useState(0);
  
  const { data, getWorkers ,  deleteWorks , isLoader, totlCount}:any =useWorkerstore()
  // const [data , setData]= useState([])
  // const [loader , setLodaer] = useState(false)
  const allCount = Math.ceil(totlCount/ countLimit)

  const theder = [
    { title: "T/r", value: "t/r" },
    { title: "First Name", value: "first_name" },
    { title: "Last Name", value: "last_name" },
    { title: "Gender", value: "gender" },
    { title: "Email", value: "email" },
    { title: "Action", value: "action1" },
  ];


  useEffect(()=>{
    getWorkers({page:countPage, limit:5})
  },[countPage])

  return (
    <>
    <ToastContainer/>
      <div>
      <WorkerModalAdd/>
      </div>
      {/* <GlobalTable/> */}
      <GlobolTable heders={theder}  skelatonLoader={isLoader} body={data} deletIdData={deleteWorks}/>
      <div className="flex items-center justify-end gap-3">
      <button onClick={()=>{setCountPage(countPage - 1)}} disabled={countPage == 1} className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "><ArrowLeftIcon/></button>
      <span className="text-[20px] text-center">{countPage}</span>
      <button onClick={()=>{setCountPage(countPage + 1)}} disabled={countPage == allCount}  className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "><ArrowRightIcon/></button>
    </div>
    </>
  );
};

export default index;
