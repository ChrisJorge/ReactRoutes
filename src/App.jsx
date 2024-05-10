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
      moon.setAttribute('style', 'display: block')
      sun.setAttribute('style', 'display: none')
      body.setAttribute("style", "background-color:white");
      for(let i = 0; i < document.querySelectorAll('.change').length; i++)
        {
          let text = document.querySelectorAll('.change')[i]
          text.setAttribute("style", "color: black")
        }
      for(let i = 0; i < document.querySelectorAll('.changeBorder').length; i++)
        {
          let options = document.querySelectorAll('.changeBorder')[i];
          options.setAttribute('style', "border-color: black")
        }
      // title.style.color = 'black';
      // for(let i = 0; i < document.querySelectorAll('.homePageOption').length; i++)
      //   {
      //     let text = document.querySelectorAll('.homePageOptionText')[i]
      //     let options = document.querySelectorAll('.homePageOption')[i]
      //     text.style.color = 'black';
      //     options.style.borderColor = 'black';
      //   }
    }
  else{
    moon.setAttribute('style', 'display: none')
    sun.setAttribute('style', 'display: block')
    body.setAttribute("style", "background-color:black");
    for(let i = 0; i < document.querySelectorAll('.change').length; i++)
      {
        let text = document.querySelectorAll('.change')[i]
        text.setAttribute("style", "color: white")
      }
    for(let i = 0; i < document.querySelectorAll('.changeBorder').length; i++)
      {
        let options = document.querySelectorAll('.changeBorder')[i];
        options.setAttribute('style', "border-color: white")
      }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage setDarkMode = {setDarkMode} darkMode = {darkMode}/>}/>
        <Route path="/collection" element={<Collection setDarkMode = {setDarkMode} darkMode = {darkMode}/>}/>
      </Routes>
    </div>
  )
}

export default App
