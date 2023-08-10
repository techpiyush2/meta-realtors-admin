import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const HeroForm = () => {
  const phraseInputRef = useRef();
  const history = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const enteredPhrase = phraseInputRef.current.value;

    if (enteredPhrase.trim().length <= 2) {
      return;
    }

    history(`/listings`);
  };

  return (
    <div className="mx-auto  mt-20 rounded-xl bg-silverLite shadow-md p-3 ">
  
        <form onSubmit={handleSearch} className="flex  items-center w-full">
          <label htmlFor="text"></label>
          <input
            placeholder="Enter city, e.g mohali"
            type="text"
            className="p-3 px-4 outline-none rounded-l-lg w-full  border-2 border-blue border-r-0 bg-silver"
            ref={phraseInputRef}
          />
          <button className="bg-blue p-4 rounded-r-lg border-2 border-blue ">
            <BiSearchAlt className="text-white font-bold" />
          </button>
        </form>
    </div>
  );
};

export default HeroForm;
