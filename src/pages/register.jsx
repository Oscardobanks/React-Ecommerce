import googleLogo from "../assets/search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "../actions/authActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/signup.jpg";
import NavbarComponent from "../layout/navbar";
import Footer from "../layout/footer";
import "../style/register.css";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <>
      <NavbarComponent active={"signup"} />
      <div className="my-16 mb-32 flex lg:flex-row flex-col md:items-center xl:gap-28 gap-10 xl:me-[150px] lg:me-[80px]">
        <div>
          <img src={signupImg} alt="" className="signupImg" />
        </div>
        <div className="flex flex-col gap-2 lg:px-0 sm:px-20 px-12 w-full">
          <h1 className="text-3xl font-semibold">Create an account </h1>
          <p className="font-semibold">Enter your details below</p>
          <ToastContainer />
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              dispatch(registerStart());
              setIsLoading(true);
              try {
                await createUserWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                dispatch(registerSuccess(auth.currentUser));
                toast.success("User Registered Successfully!!");
                setTimeout(() => {
                  navigate("/login");
                }, 3000);
                setSubmitting(false);
              } catch (error) {
                let errorMessage = error.message;
                if (error.code === "auth/email-already-in-use") {
                  errorMessage = "Email address is already in use.";
                } else if (error.code === "auth/weak-password") {
                  errorMessage =
                    "Password is too weak. Please use a stronger password.";
                } else if (error.code === "auth/invalid-email") {
                  errorMessage =
                    "Invalid email address. Please check your input.";
                }
                dispatch(registerFailure(errorMessage));
                toast.error(errorMessage);
                setSubmitting(false);
              } finally {
                setIsLoading(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="input"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="input"
                      placeholder="Email or Phone Number"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group pb-5">
                    <div className="password-input">
                      <Field
                        // type={showPassword ? "text" : "password"}
                        type="password"
                        name="password"
                        id="password"
                        className="input"
                        placeholder="Password"
                      />
                      {/* <div className="password-icons">
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                        />
                      </button>
                    </div> */}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="create-account-button w-full rounded-sm text-white font-semibold"
                    disabled={isSubmitting || isLoading}
                  >
                    {isLoading ? "Registering...." : "Create account"}
                  </button>
                  <button
                    type="submit"
                    className="flex justify-center gap-3 w-full rounded-sm border-2 border-gray-400 mt-4 py-2"
                    disabled={isSubmitting}
                  >
                    <img src={googleLogo} alt="" className="w-6" />
                    <p className="font-semibold">Sign up with Google</p>
                  </button>
                  <p className="text-center text-black mt-6">
                    Already have account?
                    <a
                      onClick={handleGoToLogin}
                      className="cursor-pointer border-b-2 hover:border-b-0 border-black pb-1 ml-2"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
