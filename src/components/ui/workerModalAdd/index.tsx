import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Button, TextField, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import useWorkerStore from "../../../store/index";
import { PostData } from "../../../service/worker"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 528,
  bgcolor: "#FFF",
  border: "none solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { postData } = useWorkerStore();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues:PostData = {
    email: "",
    first_name: "",
    gender: "",
    last_name: "",
    password: "",
    age: 0,
    phone_number: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First Name is required"),
    gender: Yup.string().required("Gender is required"),
    last_name: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = async (values:PostData) => {
    // console.log(values);
    values.age = +values.age
    const status = await postData(values);
    if (status === 201) {
      handleClose();
    } else {
      handleClose();
    }
    window.location.reload()
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="py-2 px-6 mb-[20px] text-white font-semibold bg-[#2389DA] hover:bg-blue-800 active:bg-[#2389DA] duration-200 rounded-lg"
      >
        Add a worker
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="max-w-[600px] w-full flex flex-col gap-[12px]">
              <h1 className="text-center mb-2 text-[26px] font-bold text-slate-500">Add a worker</h1>
            <div className=" flex items-center gap-[16px]">
              <div>
              <Field
                as={TextField}
                label="Email"
                name="email"
                className="w-full mb-3"
              />
              <ErrorMessage name="email" component="p" className="mb-3 text-red-500 text-center" />
              </div>

              <div>
              <Field
                as={TextField}
                label="First Name"
                name="first_name"
                className="w-full mb-3"
              />
              <ErrorMessage name="first_name" component="p" className="mb-3 text-red-500 text-center" />
              </div>
            </div>
            <div className=" flex items-center gap-[16px]">
              <div>
              <Field
                as={TextField}
                label="Age"
                name="age"
                className="w-full mb-3"
              />
              <ErrorMessage name="age" component="p" className="mb-3 text-red-500 text-center" />
              </div>

              <div>
              <Field
                as={TextField}
                label="Phone_number"
                name="phone_number"
                className="w-full mb-3"
              />
              <ErrorMessage name="phone_number" component="p" className="mb-3 text-red-500 text-center" />
              </div>
            </div>

              
              

              <div className=" flex items-center gap-[16px]">
              <div>
              <Field
                as={TextField}
                label="Last Name"
                name="last_name"
                className="w-full mb-3"
              />
              <ErrorMessage name="last_name" component="p" className="mb-3 text-red-500 text-center" />
              </div>

              <div>
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                className="w-full mb-3"
              />
              <ErrorMessage name="password" component="p" className="mb-3 text-red-500 text-center" />
              </div>
              </div>
              <div>
              <Field
                as={RadioGroup}
                aria-label="gender"
                name="gender"
                className="flex items-center mb-3"
              >
                <div className="flex items-center gap-[50px]">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                </div>
              </Field>
                
                <ErrorMessage name="gender" component="p" className="mb-3 text-red-500 text-center" />
                </div>
              <Button
                variant="contained"
                type="submit"
                className="w-full py-3"
              >
                add
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
