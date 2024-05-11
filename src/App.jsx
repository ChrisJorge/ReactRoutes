
import "./style.css";
import {Route, Routes, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
// Importing Pages

import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [update, setUpdate] = useState(false);

  const update = () => {
    let moon = document.querySelectorAll('svg')[1]
    let sun = document.querySelectorAll('svg')[0]
    let body = document.querySelector('body')

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
  }

  useEffect(() => {


      update()
  }, [darkMode])

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>}/>
        <Route path="/collection" element={<Collection setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>}/>
      </Routes>
    </div>
  )
}

export default App
