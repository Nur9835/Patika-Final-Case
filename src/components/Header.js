import React from 'react'
import {BsGithub  ,BsLinkedin} from 'react-icons/bs';

function Header() {

  return (
      <div className="w-full bg-black  mx-auto flex justify-between px-2 items-center py-4 ">    
        <div className="hidden sm:flex ">
          <a href="https://www.linkedin.com/in/nurkiliç" className="text-white mr-8">
          <BsLinkedin size ={32} />
          </a>
          <a href="https://github.com/Nur9835" className="text-white mr-8 hover:text-gray-300">
          <BsGithub  size ={32} />
          </a>
      
        </div>
        
        <div className="flex ">
          <a href="/">
         <img
            className="w-36 h-16 items-center justify-center" 
           src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            alt="Star Wars Logo"
          />
          </a>
       
        </div>

    
        <nav className="hidden sm:block ml-8">
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="text-white text hover:text-gray-300">
                  Home
                </a>
              </li>  
              <li>
                <a href="/favorite" className="text-white hover:text-gray-300">
                  My Favorite  
                </a>
              </li>
            </ul>
          </nav>
   
  
</div>

  );

}

export default Header
