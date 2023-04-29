import Starship from "../components/Starship";
import Animation from '../components/Animation'
function FavoriteStarship() {

 const favorites = JSON.parse(localStorage.getItem("favorites"));
     
return (
<div className='justify-center flex-col  flex items-center'>   

<Animation/>
<div className="flex flex-col   border-t border-white  items-center justify-start w-screen  h-screen"
style={{position: "absolute"}} >

<div className="">
 <h1 className="text-white text-2xl text-center mt-5"> My Favorite  Starships</h1>
  </div>

<div className="">
        
      {favorites !== null ? (
        <div className="grid grid-cols-2 md:grid-cols-2  mx-20 my-20 lg:grid-cols-4 gap-4">   
          {favorites.map((starship) => (        
          <Starship key={starship.url} starship={starship} />        
          ))}
            </div> 
      ) : (
     <p className="text-white mt-10 ">You haven't favorited any starships yet.</p>
      )}
</div>
</div>

<div className="flex flex-col items-start justify-start  w-screen ml-10 h-screen" 
 style={{position: "absolute"}}>

<div className='bg-white rounded-full hover:bg-black mt-5 ml-2 w-11 h-11 '> 
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
  );
      }

export default FavoriteStarship;




