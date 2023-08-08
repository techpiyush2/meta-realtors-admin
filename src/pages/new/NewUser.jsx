import "./new.scss";
import { useState, useRef } from "react";
import {
  useCreateMutation,
} from "../../redux/services/userSlice";
import { Toaster, toast } from "react-hot-toast";


const NewUser = () => {
  let emailRef = useRef()
  let passwordRef = useRef()
  
  let [create] = useCreateMutation()
  
  const handleSubmit = async (event) => {
    event.preventDefault()
  

    let  FormData = {
    
      email : emailRef.current.value,
      password : passwordRef.current.value
      
    }
    console.log(FormData);

    try {
      const res = await create(FormData).unwrap();
      if(res.code===200){
        toast.success(res.message)
        emailRef.current.value = ""
        passwordRef.current.value = ""
      }else{
        toast.error(res.message)

      }
      if (!res) {
        throw new Error("Data Fetch Failed!");
      }

    } catch (error) {
      console.log('error',error);
      toast.error('Network Error')

    }
  };
  
  

  return (
    <div className="new my-16">
      <div className="newContainer">
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
         
          </div>
          <div className="right">
            <form>
              <div className="formInput focus:border:blue">
            
              </div>
              
              <div className="formInput focus:border:blue" key={1}>
                  <label>Email</label>
                  <input type='email' placeholder= 'prashant-babu' ref={emailRef}/>
                </div>
                <div className="formInput focus:border:blue" key={2}>
                  <label>Password</label>
                  <input type='password' placeholder='password123@' ref={passwordRef} />
                </div>

              <button onClick={handleSubmit}>Add</button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
      
    </div>
  );
};

export default NewUser;
