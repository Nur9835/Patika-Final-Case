import React, { useState } from "react";
import Animation from '../components/Animation'

function Page404() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className='justify-start flex-col space-y-10  flex items-start'>   

<Animation/>

<div className="flex flex-col items-start justify-start  w-screen ml-10 h-screen" 
 style={{position: "absolute"}}>



<div className='bg-white rounded-full hover:bg-black mt-5 ml-2 w-11 h-11 '> 
<a href="/"
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





  <div className="flex flex-col items-center justify-center  border-t border-white  h-screen w-screen" 
 style={{position: "absolute"}}>

          
      <div className="w-full  flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
      
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-white">
          404
        </p>
 
        <p className="text-lg md:text-xl lg:text-2xl text-white  my-12">
          Üzgünüz, aradığınız sayfa bulunamadı...
        </p>
        <a
          href="/"
          className="flex items-center space-x-2  px-4 py-2 rounded transition duration-150"
          title="Return Home"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>HOME PAGE</span>
        </a> 
      </div>
   
   
   
    </div>

</div>
  );
}

export default Page404;

