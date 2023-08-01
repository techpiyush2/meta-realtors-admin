import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/footerLogo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

const socialIcons = [
  { id: 1, icon: <FaTwitter /> },
  {
    id: 2,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/metarealtors/",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/metarealtors3/",
  },
  {
    id: 4,
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@metarealtors1020/featured",
  },
];

const propertyText = [
  { id: 1, text: "Plots", link: "/plots" },
  { id: 2, text: "Flats", link: "/flats" },
  { id: 3, text: "Kothi And Villa", link: "/kothi-villas" },
  { id: 4, text: "Explore More", link: "/properties" },
];

const aboutText = [
  { id: 1, text: "Our Company", link: "/about-us" },
  { id: 2, text: "Invest", link: "invest" },
  { id: 3, text: "Our Blogs", link: "/blogs" },
  { id: 4, text: "Our Brands", link: "/brands" },
];

const resourcesText = [
  { id: 1, text: "Contact", link: "/contact-us" },
  { id: 2, text: "Buy property", link: "/buy" },
  { id: 3, text: "Sell Property", link: "/sell" },
  { id: 4, text: "Home Loan", link : "/home-loan" },
];

const Footer = () => {
  // const mappedList = faqsData.map((item) => (
  //   <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  // ));

  return (
    <Fragment>
      <section className="mx-auto bg-blue px-10 md:px-16 lg:px-20 py-8 pt-20 md:py-8">
        <div className="flex flex-col lg:flex-row justify-between lg:mx-10 xl:mx-28 mx-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-28 ">
              <img src={Logo} alt="meta-realtors" className="w-full" />
            </div>
            <p className="font-Poppins flex   w-72  text-white my-4 text-center lg:text-left">
              <span className="p-2">
                <FaLocationArrow />{" "}
              </span>{" "}
              E-309, Ground Floor, Phase 8A, Industrial Area, Sector 75,
              Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
            <p className="font-Poppins w-72 flex items-center  text-white mb-4 text-center lg:text-left">
              <span className="p-2">
                <FaPhoneAlt />{" "}
              </span>{" "}
              79737 40282
            </p>
            <p className="font-Poppins w-72 flex  items-center text-white mb-4 text-center lg:text-left">
              <span className="p-2 text-xl">
                <IoMdMail />{" "}
              </span>{" "}
              metarealtors1@gmail.com
            </p>
            <div className="flex">
              {socialIcons.map((item) => (
                <Link target="_blank" to={item?.link} key={item.id}>
                  <div className="mr-3 bg-white p-2 rounded-full text-blue mb-6 lg:mb-0 ">
                    {item.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="font-Poppins flex flex-col items-center lg:items-start">
            <h1 className="font-Poppins text-lg text-white mb-3 mt-4 lg:mt-0">
              Property
            </h1>
            {propertyText.map((item) => (
              <p key={item.id} className="py-1 text-md text-white">
                <Link to={item?.link} key={item.id}>
                  {item.text}
                </Link>
              </p>
            ))}
          </div>

          <div className="font-Poppins flex flex-col items-center lg:items-start">
            <h1 className="font-Poppins text-lg text-white mb-3 mt-4 lg:mt-0">
              About
            </h1>
            {aboutText.map((item) => (
              <p key={item.id} className="py-1 text-md text-white">
                <Link to={item?.link} key={item.id}>
                  {item.text}
                </Link>
              </p>
            ))}
          </div>

          <div className="font-Poppins flex flex-col items-center lg:items-start">
            <h1 className="font-Poppins text-lg text-white mb-3 mt-4 lg:mt-0">
              Resources
            </h1>
            {resourcesText.map((item) => (
              <p key={item.id} className="py-1 text-md text-white">
                <Link to={item?.link} key={item.id}>
                  {item.text}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
