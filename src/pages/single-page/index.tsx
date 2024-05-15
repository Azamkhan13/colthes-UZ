import { useStore } from "zustand";
import useProductStore from "../../store/product";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductModalAdd } from "../../components";
import tesla from "../../assets/Group 20.png"
import "./singlepage.scss"

function SinglePage() {
  const { getProductbyId, idData, deleteProduct, updateProduct }: any =
    useStore(useProductStore);
  const id:any = JSON.parse(localStorage.getItem("id"));
  const navigate = useNavigate();
  const productDelete = async () => {
    await deleteProduct(id);
    navigate("/admin/product");
  };

  async function getData() {
    await getProductbyId(id);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className=" box">
        <div className="card gap-[20px]">
          <img className="img" src={tesla} alt="tesla" />
          <div>
          <p className=" text-white text-[25px] ">age_max: {idData.age_max}</p>
          <p className=" text-white text-[25px] ">age_min: {idData.age_min}</p>
          <p className=" text-white text-[25px] ">color: {idData.color}</p>
          <p className=" text-white text-[25px] ">cost: {idData.cost}</p>
          <p className=" text-white text-[25px] ">count: {idData.count}</p>
          <p className=" text-white text-[25px] ">description: {idData.description}</p>
          <p className=" text-white text-[25px] ">discount: {idData.discount}</p>
          </div>
          <div>
          <p className=" text-white text-[25px] ">for_gender: {idData.for_gender}</p>
          <p className=" text-white text-[25px] ">made_in: {idData.made_in}</p>
          <p className=" text-white text-[25px] ">product_name: {idData.product_name}</p>
          <p className=" text-white text-[25px] ">size: {idData.size}</p>
          <button onClick={() => productDelete()} className="btn">
            delete
        </button>
            <div className=" add">
                <ProductModalAdd id={id} updateProduct={updateProduct} data ={idData} />
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
export default SinglePage;
