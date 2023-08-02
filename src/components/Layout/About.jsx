import React, { Fragment } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-16 mb-16">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
          <span className="text-blue">Meta Realtors</span> - Making Property searching a enjoyable experience.
          </h1>
          <p className="text-left text-ash">
          Meta Realtors is the best Real Estate Company of Mohali. We operate in all areas of Tri City, Starting from Mohali, Kharar, Kurali, Zirakpur, Panchkula and Chandigarh. We are into Real Estate business since 5 years. We majorly deals in investments and self-purchase of
          </p>  
         
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
         
          <div className=" lg:mt-0 lg:mx-10">
          
            <div className="flex ">
              <div className="m-8">
             
               
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" />
                  Trust
                </h2>
               
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Service
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Modern Living Villa's
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Kothi
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Commercial
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Showrooms
                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Booth

                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Industrial Plots

                </h2>
                
                <h2 className="flex items-center text-ash mb-2">
                  <AiFillCheckCircle className="text-blue mr-2" /> Agriculture Land

                </h2>
                
            
                
              
              </div>
            </div>
            <div className=" pt-6">
              <button className=" bg-blue text-white font-bold text-md px-8 py-3 rounded-lg shadow-lg">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
