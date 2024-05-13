// import GlobalTable from '../../components/ui/table'
import GlobolTable from "../../components/ui/globol-table"
import { WorkerModalAdd } from '../../components';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import useWorkerstore from "../../store"
const index = () => {
  
  const { data, getWorkers ,  deleteWorks , isLoader}:any =useWorkerstore()
  // const [data , setData]= useState([])
  // const [loader , setLodaer] = useState(false)

  const theder = [
    { title: "T/r", value: "t/r" },
    { title: "First Name", value: "first_name" },
    { title: "Last Name", value: "last_name" },
    { title: "Gender", value: "gender" },
    { title: "Email", value: "email" },
    { title: "Password", value: "password" },
    { title: "Action", value: "action1" },
  ];


  useEffect(()=>{
    getWorkers({page:1, limit:10})
  },[])

  return (
    <>
    <ToastContainer/>
      <div>
      <WorkerModalAdd/>
      </div>
      {/* <GlobalTable/> */}
      <GlobolTable heders={theder}  skelatonLoader={isLoader} body={data} deletIdData={deleteWorks}/>
    </>
  );
};

export default index;
