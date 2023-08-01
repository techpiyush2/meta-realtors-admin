import React, { Fragment } from "react";

const BrandItem = ({ id,imgLink}) => {
  return (
    <Fragment >
      <li className="flex-[1_1_200px] m-5 ">
       <div className="flex flex-col items-center">
       <img src={imgLink} className="" alt=""  />
       </div>
      </li>
    </Fragment>
  );
};

export default BrandItem;
