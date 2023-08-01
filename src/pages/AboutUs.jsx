import React, { useEffect, useRef } from "react";
import AboutPage from "../components/Layout/About";

const Login = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section  className="bg-silver pt-20" ref={divRef}>
        <AboutPage />
      </section>
    </>
  );
};

export default Login;