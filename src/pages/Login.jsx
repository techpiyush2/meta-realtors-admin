import React, { useEffect, useRef } from "react";
import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
  
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pb-80" ref={divRef}>
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
