import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/Signup.jpg";
import { useLoginMutation } from "../../redux/services/userSlice";
import { login, setActiveUser } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const [logIn] = useLoginMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const user = await logIn(formData).unwrap();
      console.log(user);
      if (!user) {
        throw new Error("Authentication Failed!");
      }
      dispatch(login(user.data.token));
      dispatch(setActiveUser(user.data.userInfo.email));
      navigate("/home");
   
    } catch (error) {
      console.log('error something', error);
    }
    setIsLoading(false);
  };

  const content = isLoading ? "Logging in..." : "Log in";

  return (
    <>
      <div className="font-Poppins pt-40 flex justify-center px-4 md:px-16 lg:px-20">
        <div className="bg-white px-4 md:px-7 py-10 w-full lg:w-1/2 rounded-[30px]  shadow-md lg:shadow">
          <div className="flex flex-col items-center pt-5">
            <h2 className="text-2xl font-medium mb-3 ">Log in to Meta Realtors</h2>
        
          </div>
          {errorMessage && (
            <div className="text-black mb-8 text-sm p-4 bg-[#f7cfcf] border-[#dc2626] border rounded-lg">
              {" "}
              <p className="text-center text-sm">{errorMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label className="text-ash pb-2 text-lg" htmlFor="email">
                Email <span className="text-[#dc2626]">*</span>
              </label>
              <input
                className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                id="email"
                type="email"
                ref={emailInputRef}
              />
            </div>
            <div className="flex flex-col mb-12">
              <label className="text-ash text-lg" htmlFor="password">
                Password <span className="text-[#dc2626]">*</span>
              </label>
              <input
                className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                id="password"
                type="password"
                ref={passwordInputRef}
              />
            </div>
            <button className="bg-blue font-medium w-full text-white py-3 rounded-lg">
              {content}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
