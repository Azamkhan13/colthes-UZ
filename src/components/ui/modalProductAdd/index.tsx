import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import {
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useEffect } from "react";

import useProductStore from "../../../store/product";
import useCategoryStore from "../../../store/category";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 645,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props:any) {
  const { postProduct } = useProductStore();
  const { data, getData } = useCategoryStore();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: any = {
    age_max: "",
    age_min: "",
    category_id: "",
    color: "",
    cost: "",
    count: "",
    discount: "",
    for_gender: "",
    made_in: "",
    product_name: "",
    size: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    age_max: Yup.number()
      .required("Maxsimal yosh kriting")
      .positive("Maxsimal yosh kriting"),
    cost: Yup.number()
      .required("Xarajatlarni kiriting")
      .positive("Xarajatlarni kiriting"),
    color: Yup.string().required("Rang kiriting"),
    age_min: Yup.number()
      .required("Minimal yosh kiring")
      .positive("Minimal yosh kiring"),
    size: Yup.number()
      .required("O'lchamini kiring")
      .positive("O'lchamini kiring"),
    discount: Yup.number()
      .required("Chegirmani kiring")
      .positive("Chegirmani kiring"),
    count: Yup.number().required("Sonini kiring").positive("Sonini kiring"),
    made_in: Yup.string().required("Davlat nomini kiring"),
    category_id: Yup.string().required("Category ID kiring"),
    product_name: Yup.string().required("Mahsulot nomini kiring"),
    for_gender: Yup.string().required("jinsi"),
    description: Yup.string().required("Description kiring"),
  });

  useEffect(() => {
    getData({ page: 1, limit: 100 });
    setTimeout(() => {
      console.log(data);
    }, 1000);
  }, []);

  const handleSubmit = async (values: any) => {
    // console.log(values);
    
    
    
    if(props.id){
        values.product_id = props.id
        props.updateProduct(values)
        handleClose();
        setTimeout(() => {
          window.location.reload()
        }, 1000);
    }else{
      const status = await postProduct(values);
      if (status === 201) {
        handleClose();
      } else { 
        handleClose();
    }
    }
    
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="py-2 px-6 text-white font-semibold bg-[#2389DA] hover:bg-blue-800 active:bg-[#2389DA] duration-200 rounded-lg"
      >
        Mahsulot qo'shing
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="max-w-[700px] flex-col w-full flex gap-[12px]">
              <h1 className="text-center font-bold mb-2 text-[26px]">
                Mahsulot qo'shing
              </h1>
              <div className="flex gap-3 w-full">
                <div className="flex gap-3x flex-col">
                  <Field
                    as={TextField}
                    label="Narxi"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="number"
                    name="cost"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="cost"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as="select"
                    name="category_id"
                    className="w-full mb-3 border py-4 "
                  >
                    {data.map((item) => (
                      <option key={item?.category_id} value={item?.category_id}>
                        {item?.category_name}
                      </option>
                    ))}
                  </Field>

                  <Field
                    as={TextField}
                    label="Rang"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="text"
                    name="color"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="color"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as={TextField}
                    label="Maxsimum yosh"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="number"
                    name="age_max"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="age_max"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as={TextField}
                    label="Minimum yosh"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="number"
                    name="age_min"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="age_min"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as={TextField}
                    label="Hisoblash"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="number"
                    name="count"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="count"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Field
                    as={TextField}
                    label="Discount"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="number"
                    name="discount"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="discount"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />

                  <Field
                    as="select"
                    name="made_in"
                    className="w-full mb-3 border py-5 "
                  >
                    {["Uzbekistan", "China", "Turkiy"].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </Field>
                  <Field
                    as={TextField}
                    label="Product name"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="text"
                    name="product_name"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="product_name"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as={TextField}
                    label="O'lcham"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="number"
                    name="size"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="size"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as={TextField}
                    label="Discription"
                    sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                    type="text"
                    name="description"
                    className=" w-[100%]  mb-3 outline-none py-0"
                  />
                  <ErrorMessage
                    name="description"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                  <Field
                    as={RadioGroup}
                    aria-label="For gender"
                    name="for_gender"
                    className="flex items-center mb-3"
                  >
                    <div className="flex items-center justify-between">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Erkak"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Ayol"
                      />
                    </div>
                  </Field>
                  <ErrorMessage
                    name="jins uchun"
                    component="p"
                    className="mb-3 text-red-500 text-center"
                  />
                </div>
              </div>
              <Button variant="contained" type="submit" className="w-full py-3">
                qo'shish
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
