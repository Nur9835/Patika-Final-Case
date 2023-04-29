import React from "react";
import { AiOutlineSearch } from "react-icons/ai";


import { useStarship } from "../context/StarshipContext";
const SearchBar = ({ onChange }) => {

  const {
  searchQuery,
  } = useStarship();

  return (
<div className="relative flex items-center  justify-center mt-10 ">

<p className="mr-2 font-bold  text-white  text-lg"> Name/Model</p>

<div className="flex items-center bg-white border-3 rounded-full py-1 pr-2 pl-2  ">

  <AiOutlineSearch color="black" size={25} />
  <input
    type="text"
    id="search"
    name="search"
    placeholder=""
    value={searchQuery}
    onChange={onChange}
    className="text-black  focus:outline-none
    focus:shadow-outline  flex-1  pl-3
     border-3 
    "
  />
</div>
<button 
className="bg-black hover:bg-white hover:text-black hover:font-border border-2 
text-wood font-bold ml-4 px-4  py-2 pr-10 pl-10 rounded-full transition-colors duration-300 
 ease-in-out"
>Fiter
</button>
</div>

  );
};

export default SearchBar;
