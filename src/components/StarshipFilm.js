import React ,{useEffect,useState}from 'react'
import axios from 'axios';

const StarshipFilm = ({ film }) => {

    const [filmstar, setSFilmstar ]= useState([]);
    const [starshipIds, setstarshipIds ]= useState(2);

      useEffect(() => {
        axios.get(film)
          .then(response => {
            setSFilmstar( response.data);
            setstarshipIds( film.split("/").filter(Boolean).pop()) ;
         //console.log("starshipIds",starshipIds);
          })
          .catch(error => {
            console.log(error);
          });
      }, [film]);
      


  return (
    <div className="bg-black     rounded-lg shadow-md overflow-hidden">
    
<img
        className="h-18 w-48 object-cover  object-center"
           src={`../img/films/${starshipIds}.jpg`}
           alt={""}
           onError={(e) => {
             e.target.onerror = null;
             e.target.src = "";
           }}  
         />   
   <div className="flex flex-col  ">  
   <p className="text-white font-bold text-center ">  {filmstar.title}</p>
   </div>  
   </div>
 
  )
}
export default StarshipFilm;
