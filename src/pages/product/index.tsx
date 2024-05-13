import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {ProductModalAdd} from "../../components"
import { Table } from "../../components";
import  useProductStore from "../../store/product"

function index() {

  const [countPage] = useState(1);
  const [countLimit] = useState(10);
  const {  data, isLoader, getProduct, deleteProduct} = useProductStore();


  useEffect(() => {
    getProduct({ page: countPage, limit: countLimit });
  }, [countPage]);


  const theder = [
    { title: "T/r", value: "t/r" },
    { title: "Mahsulot nomi", value: "product_name" },
    { title: "Rang", value: "color" },
    { title: "Soni", value: "count" },
    { title: "Narxi", value: "cost" },
    { title: "O'lcham", value: "size" },
    { title: "Action", value: "action3" },
  ];
  return (
    <>
     <ToastContainer/>
      <div className="py-3">
          <ProductModalAdd/>
      </div>
      <Table heders={theder}  body={data} skelatonLoader={isLoader} deletIdData={deleteProduct}/> 
    </>
  );
}

export default index;
