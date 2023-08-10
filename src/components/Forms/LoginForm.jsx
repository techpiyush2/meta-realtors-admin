import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster,toast } from "react-hot-toast";
import { useLoginMutation } from "../../redux/services/userSlice";
import { login, setActiveUser, setActiveUserId } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import logo from '../../assets/logo.png'
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
       if(user.code===200){
        toast.success(user.message)
       }else{
        toast.error(user.message)

       }
       
      if (!user) {
        throw new Error("Authentication Failed!");
      }
      dispatch(login(user.data.token));
      dispatch(setActiveUser(user.data.userInfo.email));
      dispatch(setActiveUserId(user.data.userInfo._id));
      navigate("/");
   
    } catch (error) {
      console.log('error something', error);
      toast.error('Network Error')
    }
    setIsLoading(false);
  };

  const content = isLoading ? "Logging in..." : "Log in";

  return (
    <>
      <div className="font-Poppins pt-20 flex justify-center px-4 md:px-16 lg:px-20">
        <div className="bg-white px-4 md:px-7 py-10 w-full lg:w-1/2 rounded-[30px]  shadow-md lg:shadow">
          <div className="flex flex-col items-center pt-5">
           <img className="w-40 mb-4" src={logo} alt="meta realtors logo" />
            
            <h2 className="text-2xl font-medium mb-3 ">Log in to Meta Realtors Admin Panel</h2>
          </div>
        
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label className="text-ash pb-2 text-lg" htmlFor="email">
                Email <span className="text-[#dc2626]">*</span>
              </label>
              <input
                className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
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
                className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg text-blue"
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
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default LoginForm;
