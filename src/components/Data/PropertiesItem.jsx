import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import environment from "../../redux/environment";

const imgPath = environment.baseUrl + 'upload/properties/'

const PropertiesItem = ({
  id,
  size,
  price,
  address,
  title,
  isActive,
  isDeleted,
  description,
  image,
  type,
  bedrooms,
  bathrooms,
  parking,
  parkOrGarden,
  Features,
  contactNo,
  ownerName,
}) => {

  return (
    <Fragment>
      <li className="w-auto lg:w-1/4 m-2 flex flex-col bg-white rounded-3xl  shadow-md">
        <div>
          <div className="py-2 px-2">
            <div className="w-auto p-1 ">
              <p className="font-Poppins text-bold rounded-full text-orange  absolute bg-white p-2 py-1 mt-2 ml-2">
                {type}
              </p>
              <img
                className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl"
                src={imgPath + image}
                alt="real estate"
              />
            </div>
            <div className="flex px-1 mt-2 mb-1">
              <div className="mr-1">
                <HiOutlineLocationMarker className="font-Poppins  text-ash" />
              </div>
              <Link to={`/listings/${id}`} className="truncate">
                <h1 className="font-Poppins text-xs text-ash truncate capitalize">
                  {address}
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex justify-between px-4 mb-3">
            <div className="flex items-center ">
              <RiHotelBedFill className="text-medium text-blue mr-1" />{" "}
              <p className="text-xs text-ash">{bedrooms} Bed</p>
            </div>
            <div className="flex items-center ">
              <FaBath className="text-medium text-blue mr-1" />{" "}
              <p className="text-xs text-ash">{bathrooms} Bath</p>
            </div>
            <div className="flex items-center ">
              <MdSpaceDashboard className="text-medium text-blue mr-1" />{" "}
              <p className="text-xs text-ash">{size} sqft</p>
            </div>
          </div>
          <div className="  px-4 pb-3 mb-4">
          
            <h1 className="font-Poppins text-md font-semibold pl-1 py-1">
              {title}
            </h1>
             <p className=" mb-2 text-blue">₹ {price}</p>
            <Link to={`/listings/${id}`}>
              <button className=" bg-blue text-white font-bold text-xs px-4 py-2 rounded-lg shadow-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default PropertiesItem;
