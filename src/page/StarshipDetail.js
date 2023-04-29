import React ,{useState,useEffect}  from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
 import Animation2 from '../components/Animation2'
import StarshipFilm  from '../components/StarshipFilm';
import { FaStar } from 'react-icons/fa';

function StarshipDetail() {
const { id } = useParams();
const [starship, setStarship] = useState(null);
const [loading, setLoading] = useState(true);
const defaultImage = "";

useEffect(() => {
 axios
    .get(`https://swapi.dev/api/starships/${id}`)
    .then((response) => {
      setStarship(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}, [id]);


if (loading) {
return (
  <div className='justify-center flex-col  flex items-center'>   
<Animation2/>
 <div className="flex flex-col items-center justify-center w-screen  h-screen"
 style={{position: "absolute"}} >
  {Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        color="white"
        className="text-gold  absolute rounded-full animate-spin"
        style={{
          transform: `rotate(${index * (360 / 5)}deg) translateX(50px) rotate(-${index * (360 / 5)}deg)`,
        }}
      />
    ))}
</div>
</div>
);
}

// img dosyasında her starshıpin ıd'si adında fotoğrafları eklendi ve bu şekilde starshıp fotoğrafları return edildi

const imageUrl = `../img/starships/${starship.url.split("/")[5]}.jpg`;
  
 return (
<>

<div className='justify-center flex-col space-y-10  flex items-center'>   

 <Animation2/> 

 <div className="flex flex-col items-center justify-center  border-t border-white  h-screen w-screen" 
 style={{position: "absolute"}}>

      <div className="max-w-md mx-auto px-4 py-8 pt-4 bg-black shadow-lg rounded-lg">

        <div className="flex items-center justify-center mb-5">
          <h2 className="text-3xl font-medium text-white   text-gray-800">{starship.name}</h2>   
        </div>
        
        <div className="flex items-center justify-between mb-10">
        <img
       className="h-48 w-full object-cover object-center"
          src={imageUrl}
          alt={starship.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        /> 
     
        </div>

        <div className="flex  text-2xl items-center mb-4">
        <p className="text-white  ">Model: {starship.model}</p>
        </div>

        <div className="flex text-2xl items-center mb-4">
          <p className="text-white ">Hyperdrive Rating:</p>
          <p className="ml-2 text-white ">{starship.hyperdrive_rating}</p>
        </div>
        <div className="flex text-2xl items-center mb-4">
          <p className="text-white ">Passengers:</p>
          <p className="ml-2 text-white ">{starship.passengers}</p>
        </div>
        <div className="flex text-2xl items-center mb-4">
          <p className="text-white">Max Atmosphering Speed:</p>
          <p className="ml-2 text-white">{starship.max_atmosphering_speed}</p>
        </div>
        <div className="flex text-2xl  items-center mb-4">
          <p className="text-white">Manufacturer:</p>
          <p className="ml-2 text-white">{starship.manufacturer}</p>
        </div>
        <div className="flex  text-2xl items-center mb-4">
          <p className="text-white">Crew:</p>
          <p className="ml-2 text-white">{starship.crew}</p>
        </div>
        <div className="flex  text-2xl items-center mb-4">
          <p className="text-white">Cargo Capacity:</p>
          <p className="ml-2 text-white" >{starship.cargo_capacity}</p>
        </div>

      </div>
    </div>

    <div className="flex flex-col items-start justify-start  w-screen ml-10 h-screen" 
 style={{position: "absolute"}}>



<div className='bg-white rounded-full  hover:bg-black mt-5 ml-2 w-11 h-11 '> 
<a
  href="/"
  className="flex text-black items-center space-x-2  hover:text-white rounded transition duration-150"
  title="Home Page" 
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
</a>
 </div>


  </div>









</div>



<div className='justify-center  flex-col space-y-10 flex items-end'> 

<div className="flex flex-col items-center  justify-center mt-10  h-screen w-screen" 
 style={{position: "absolute"}}>

<h1 className='text-white text-center text-2xl m-5'>Appeared on Films </h1>

<div className="flex text-2xl flex-row gap-10  ">
  
  {starship.films.map((films) => (

<StarshipFilm film={films} />

 ))}


</div>
  </div>
</div>

 </>



  );


}

export default StarshipDetail
