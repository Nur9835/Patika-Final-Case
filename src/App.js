
 import Page404 from './page/Page404';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  StarshipDetail from './page/StarshipDetail';
import FavoriteStarship from './page/FavoriteStarship'
import React from "react";
import StarshipList from "./page/StarshipList";
import Header from './components/Header';
import { StarshipProvider } from './context/StarshipContext'
import StarshipFilm from './components/StarshipFilm'

 function App() {
  return (
    <div>
     <StarshipProvider>
     <Header />
      <Router>
       <Routes>
       <Route exact path="/" element={ <div>  <StarshipList/>  </div>   } />
       <Route path="/starship/:id" element={<StarshipDetail />} />
       <Route path="*" element={  <Page404 /> } /> 
       <Route path="/favorite" element={<FavoriteStarship />} />
       <Route path="/movies/:id" element={<StarshipFilm />} />
       </Routes>
       </Router>
       </StarshipProvider>
    </div>
  );
};

export default App;
