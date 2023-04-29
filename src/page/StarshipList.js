
import React from "react";
import { useStarship } from '../context/StarshipContext';
import Starship from "../components/Starship";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Animation from '../components/Animation'
import { FaStar } from 'react-icons/fa';

const StarshipList = () => {
  const {
    starships,
    setStarships,
    searchQuery,
    setSearchQuery,
    nextPage,
    setNextPage,
    loading,
    setLoading,
    sort,
    setSort
  }=useStarship();
  

   const handleLoadMore = async () => {
    try {
      setLoading(true);
      const response = await axios.get(nextPage);
      setStarships([...starships, ...response.data.results]);
      setNextPage(response.data.next);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleSort = async (event) => {
    event.preventDefault();
    setSort(event.target.value);
  };


  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const sortedStarships = filteredStarships.sort((a, b) => {
    if (sort === "length_asc") {
      return parseInt(a.length) - parseInt(b.length);
    } else if (sort === "length_desc") {
      return parseInt(b.length) - parseInt(a.length);
    } else if (sort === "crew_asc") {
      return parseInt(a.crew) - parseInt(b.crew);
    } else if (sort === "crew_desc") {
      return parseInt(b.crew) - parseInt(a.crew);
    } 
    else if (sort === "speed_desc") {
      return parseInt(b.max_atmosphering_speed) - parseInt(a.max_atmosphering_speed);
    }
    else if (sort === "speed_asc") {
      return parseInt(a.max_atmosphering_speed) - parseInt(b.max_atmosphering_speed);
    }
    else if (sort === "year_asc") {
      return  parseInt(a.consumables )  -parseInt( b.consumables);
    } else if (sort === "year_desc") {
      return parseInt( b.consumables)- parseInt(a.consumables) ;
    } 
    else {
      return 0;
    }
  });




  return (

<div className='justify-center flex-col  flex items-center'>   

<Animation/>

<div className="flex flex-col items-center justify-start w-screen  h-screen"
style={{position: "absolute"}} >

 <div className="flex felx-col items-end justify-end w-screen mr-5"> 
        <select
      value={sort}
      onChange={handleSort}
      className="px-3 py-1 sm:w-auto md:w-1/2 lg:w-1/6 mt-10 bg-black text-white hover:bg-white hover:cursor-pointer hover:text-black  mr-5 rounded-md border-2 "
        >
          <option value="">Sırala</option>
          <option value="length_asc">Uzunluğa Göre (Artan)</option>
          <option value="length_desc">Uzunluğa Göre (Azalan)</option>
          <option value="crew_asc">Mürettebat Sayısına Göre (Artan)</option>
          <option value="crew_desc">Mürettebat Sayısına Göre (Azalan)</option>
          <option value="speed_asc">Hıza Göre (Artan)</option>
          <option value="speed_desc">Hıza Göre (Azalan)</option>
          <option value="year_asc">Yıla Göre (Artan)</option>      
          <option value="year_desc">Yıla Göre (Azalan)</option>
        </select>
 </div>
    
    
<SearchBar searchQuery={searchQuery} onChange={handleSearch} />

  <div className="grid  relative grid-cols-1 md:grid-cols-4  mx-20  my-20 lg:grid-cols-5 gap-4" >
        
      {filteredStarships.map((starship) => (
       <Starship starship={starship}  />
      ))} 
      </div> 
      {loading &&         
      <div className=" flex items-center mb-10 justify-center relative">       
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            color="white"
            className="text-gold absolute rounded-full animate-spin"
            style={{
              transform: `rotate(${index * (360 / 5)}deg) translateX(50px) rotate(-${index * (360 / 5)}deg)`,
            }}
          />
        ))}
      </div>
      }
      
     {nextPage && 
     <div className="flex justify-center mt-10 relative items-center  ">
     <button
     onClick={handleLoadMore}
     className="bg-black  lg:text-2xl hover:bg-white hover:text-black hover:font-border border-2 
    text-wood font-bold py-2 px-4 rounded-full transition-colors duration-300 
     ease-in-out"
   >
  Load more
   </button>
   </div>
     
     }  
 
</div>






    </div>
  );
};

export default StarshipList;
