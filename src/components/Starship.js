
import React ,{useState ,useEffect}from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Starship = ({ starship }) => {

// starshipin favori olma durumunu  tutar
const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isStarshipFavorite = favorites.some((item) => item.url === starship.url);
    setIsFavorite(isStarshipFavorite);
  }, [starship.url]);


  const removeFromFavorites = (starship) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((item) => item.url !== starship.url);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  };
  // favorilere ekleme
  const addToFavorites = (starship) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(starship);
    localStorage.setItem("favorites", JSON.stringify(favorites));

  };
  
  const handleFavorite = () => {
    if (isFavorite)  removeFromFavorites(starship)  
    else addToFavorites(starship)
   setIsFavorite(!isFavorite); 
  };

  const imageUrl = `../img/starships/${starship.url.split("/")[5]}.jpg`;
  return (

     <div className="bg-black    rounded-lg shadow-md overflow-hidden" >
     <div className="justify-end flex   items-end">
       <button onClick={handleFavorite}>
     <AiFillHeart size={24} color={isFavorite ? "red" : "white"} />
    </button>
      </div>
        <Link to={`/starship/${starship.url.split("/")[5]}`} key={starship.url}  > 
     <img
       className="h-48 w-full object-cover object-center"
          src={imageUrl}
          alt={""}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "";
          }}  
        />   
        <div className="flex flex-col  p-4  justify-center  items-start">  
            <h2 className="font-bold text-white  text-xl mb-2">{starship.name}</h2>
            <p className="text-white font-bold text-base"> Model: {starship.model}</p>
            <p className="text-white font-bold text-base">Hyperdrive Rating: {starship.hyperdrive_rating}</p>
          
            <p className="text-white font-bold text-base">Length: {starship.length}</p>
            <p className="text-white font-bold text-base">Crew: {starship.crew}</p>
            <p className="text-white font-bold text-base">Speed: {starship.max_atmosphering_speed}</p>
            <p className="text-white font-bold text-base">Year: {starship.consumables}</p>



        </div>    
        </Link>
        </div>
   );
 };

 export default Starship;





