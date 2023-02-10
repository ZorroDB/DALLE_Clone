import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


//Importeerd the benodigde modules

import { logo } from './assets';
import { Home, CreatePost } from './page';


//Het linken van de SVG (logo) en andere pagina's met deze app.


//Component die de header en navigation van de app rendered
const App = () => (
  
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      
      <div className="flex">
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mr-4">Create</Link>
        {/* <Link to="/AboutUs" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">About Us</Link> */}
      </div>
    </header>
 


    {/*Main content area*/}
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      {/* Render verschillende components, ligt aan de momentele link */}
      <Routes>
        {/* home pagina */}
        <Route path="/" element={<Home />} />
        {/* create-post pagina */}
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>


);

export default App;
