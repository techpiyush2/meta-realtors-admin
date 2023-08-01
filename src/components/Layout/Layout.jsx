import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main className="m-2">{children}</main>
    </Fragment>
  );
};

export default Layout;
