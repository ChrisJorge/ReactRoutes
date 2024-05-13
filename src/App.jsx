
import "./style.css";
import {Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";
// Importing Pages

import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";
import Pokemon from "./pages/Pokemon";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [num, setNum] = useState(10);


  const update = (code) => {
    let moon = document.querySelectorAll('svg')[1];
    let sun = document.querySelectorAll('svg')[0];
    let body = document.querySelector('body');

    if(!darkMode)
      {
        if(code == 0)
        {
          moon.setAttribute('style', 'display: block');
          sun.setAttribute('style', 'display: none');
        };
        body.setAttribute("style", "background-color:white");
        for(let i = 0; i < document.querySelectorAll('.change').length; i++)
          {
            let text = document.querySelectorAll('.change')[i];
            text.setAttribute("style", "color: black");
          };
        for(let i = 0; i < document.querySelectorAll('.changeBorder').length; i++)
          {
            let options = document.querySelectorAll('.changeBorder')[i];
            options.setAttribute('style', "border-color: black");
          };
        for(let i = 0; i < document.querySelectorAll('input').length; i++)
          {
            let input = document.querySelectorAll('input')[i];
            input.classList.add("light");
            input.classList.remove("dark");
            
          };
      }
    else{
      if(code == 0)
        {
          moon.setAttribute('style', 'display: none');
          sun.setAttribute('style', 'display: block');
        };
      body.setAttribute("style", "background-color:black");
      for(let i = 0; i < document.querySelectorAll('.change').length; i++)
        {
          let text = document.querySelectorAll('.change')[i];
          text.setAttribute("style", "color: white");
        };
      for(let i = 0; i < document.querySelectorAll('.changeBorder').length; i++)
        {
          let options = document.querySelectorAll('.changeBorder')[i];
          options.setAttribute('style', "border-color: white");
        };
      for(let i = 0; i < document.querySelectorAll('input').length; i++)
          {
            let input = document.querySelectorAll('input')[i];
            input.classList.remove("light");
            input.classList.add("dark");
            
          };
    };
  };

  

  useEffect(() => {

      update(0);
  }, [darkMode]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>}/>
        <Route path="/collection" element={<Collection setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update} setNum = {setNum} num = {num}/>}/>
        <Route path="/pokemon/:name" element={<Pokemon setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>}/>
      </Routes>
    </div>
  );
};

export default App;
