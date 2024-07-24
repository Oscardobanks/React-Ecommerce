import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../actions/authActions";
import { auth } from "../../auth/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/signup.jpg";
import NavbarComponent from "../layout/navbar";
import Footer from "../layout/footer";
import "../style/register.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <>
      <NavbarComponent active={""} />
      <div className="my-16 mb-32 flex lg:flex-row flex-col md:items-center xl:gap-28 gap-10 xl:me-[150px] lg:me-[80px]">
        <div>
          <img src={signupImg} alt="" className="signupImg" />
        </div>
        <div className="flex flex-col gap-2 lg:px-0 sm:px-20 px-12 w-full">
          <h1 className="text-3xl font-semibold">Log in to Exclusive </h1>
          <p className="font-semibold">Enter your details below</p>
          <ToastContainer />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const credentials = {
                  email: values.email,
                  password: values.password,
                };
                await signInWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                const user = dispatch(login(credentials));
                // Update the user state in the Redux store
                dispatch({ type: "UPDATE_USER", payload: user });
                setTimeout(() => {
                  navigate("/");
                }, 3000);
                setSubmitting(false);
              } catch (error) {
                if (error.code === "auth/wrong-password") {
                  toast.error("Incorrect password. Please try again.");
                } else if (error.code === "auth/user-not-found") {
                  toast.error(
                    "User not found. Please check your email address."
                  );
                } else if (error.code === "auth/invalid-email") {
                  toast.error(
                    "Invalid email address. Please check your input."
                  );
                } else if (error.code === "auth/invalid-credential") {
                  toast.error("Invalid email or password. Please try again.");
                } else {
                  toast.error("An error occurred. Please try again later.");
                }
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
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
                        type="password"
                        name="password"
                        id="password"
                        className="input"
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="create-account-button px-10 text-white font-semibold rounded-sm"
                      disabled={isSubmitting || isLoading}
                    >
                      {isLoading ? "Logging in...." : "Log In"}
                    </button>
                    <a href="" className="text-red-700 capitalize">
                      forget password?
                    </a>
                  </div>
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

export default Login;
