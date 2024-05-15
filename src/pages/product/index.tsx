import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ProductModalAdd } from "../../components";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Table } from "../../components";
import useProductStore from "../../store/product";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function index() {
  const [countPage, setCountPage] = useState(1);
  const [countLimit] = useState(0);
  const { data, isLoader, getProduct, deleteProduct, totlCount } =
    useProductStore();
  const [change, setChange] = useState("");

  const allCount = Math.ceil(totlCount / countLimit);
  useEffect(() => {
    getProduct({ page: countPage, limit: 5, name: change });
  }, [countPage, change]);

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
      <ToastContainer />
      <div className=" flex items-center justify-between">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              width: 400,
              alignItems: "center",
              display: "flex",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "serch google maps" }}
              onChange={(e) => setChange(e.target.value)}
            />
            <IconButton type="button" sx={{ p: "15px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="py-3">
          <ProductModalAdd />
        </div>
      </div>
      <Table
        heders={theder}
        body={data}
        skelatonLoader={isLoader}
        deletIdData={deleteProduct}
      />
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() => {
            setCountPage(countPage - 1);
          }}
          disabled={countPage == 1}
          className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "
        >
          <ArrowLeftIcon />
        </button>
        <span className="text-[20px] text-center">{countPage}</span>
        <button
          onClick={() => {
            setCountPage(countPage + 1);
          }}
          disabled={countPage == allCount}
          className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "
        >
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
}

export default index;
