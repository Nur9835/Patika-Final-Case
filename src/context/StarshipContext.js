import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

 const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [sort, setSort] = useState("");

  const values = {

    sort,
    setSort,
    starships,
    setStarships,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery,
    nextPage,
    setNextPage
  };


useEffect(() => {
  //kullancının girmiş olduğu her name/model değerine göre apiden veriler filtrelenerek listelenir
  setLoading(true);
      axios
        .get(`https://swapi.dev/api/starships?search=${searchQuery}`)
        .then((response) => {
          setStarships(response.data.results);
          setNextPage(response.data.next);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
}, [searchQuery]);

  
  return (
    <StarshipContext.Provider value={values}>
      {children}
    </StarshipContext.Provider>
  )
};

export const useStarship = () => useContext(StarshipContext);

