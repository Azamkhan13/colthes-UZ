import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import "./login.scss";
import { authRequest } from "../../service/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setCookies } from "../../utils/cocies";
function Login() {
  const navigate = useNavigate();
  async function Loginn(e: any) {
    console.log(e);
    try {
      const response = await authRequest.Login(e);
      if (response.status == 200) {
        toast.success("ro'yxatdan o'tdingz");
        localStorage.setItem("token", response?.data?.access_token);
        setTimeout(() => {
          setCookies('token', response.data.access_token)
          navigate("/admin");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, []);
  return (
    <>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={Loginn}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <div className="login-box">
              <h2 className="text-2xl">Login</h2>
              <div className="user-box">
                <Field type="text" name="email" />
                <label>Email</label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-white"
                />
              </div>
              <div className="user-box">
                <Field type="password" name="password" />
                <label>Password</label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error text-white"
                />
              </div>
              <button
                type="submit"
                className="custom-btn btn-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    <ToastContainer/>
    </>
  );
}

export default Login;
