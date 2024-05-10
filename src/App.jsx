import "./style.css";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";
// Importing Pages

import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";


function App() {
  const [darkMode, setDarkMode] = useState(false) ;
  let moon = document.querySelector('.Moon')
  let sun = document.querySelector('.Sun')
  let body = document.querySelector('body')
  let title = document.querySelector('.homePageTitle')

  if(!darkMode)
    {
      console.log('dark');
      moon.style.display = 'block';
      sun.style.display = 'none';
      body.setAttribute("style", "background-color:white");
      title.style.color = 'black';
      for(let i = 0; i < document.querySelectorAll('.homePageOption').length; i++)
        {
          let text = document.querySelectorAll('.homePageOptionText')[i]
          let options = document.querySelectorAll('.homePageOption')[i]
          text.style.color = 'black';
          options.style.borderColor = 'black';
        }
    }
  else{
    console.log('dark');
    moon.style.display = 'none';
    sun.style.display = 'block';
    body.setAttribute("style", "background-color:black");
    title.style.color = 'white';
    for(let i = 0; i < document.querySelectorAll('.homePageOption').length; i++)
      {
        let text = document.querySelectorAll('.homePageOptionText')[i]
        let options = document.querySelectorAll('.homePageOption')[i]
        text.style.color = 'white';
        options.style.borderColor = 'white';
      }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage setDarkMode = {setDarkMode} darkMode = {darkMode}/>}/>
        <Route path="/collection" element={<Collection/>}/>
      </Routes>
    </div>
  )
}

export default App
