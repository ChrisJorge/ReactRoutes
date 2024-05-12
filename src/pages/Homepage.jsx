import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Homepage({setDarkMode, darkMode,  update}) {
    const colorSwitch = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
       update()
    }, [])
    

  return (
    <div className='homePage'>
        <div className="topContainer">
            <div>

            </div>
            <div className="titleContainer">
                <h1 className="homePageTitle change">Welcome, please select an option</h1>
            </div>
            <div className='option'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="Sun" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="Moon" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                </svg>
                <label className="switch">
                    <input type="checkbox" className="Toggle" value="1" name="toggle1" onClick={colorSwitch}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
        <div className="homePageOptionsContainer">
            <div className="homePageOptionsRow">
                <Link to = "/collection" className='homePageOption changeBorder'>
                
                    <p className="homePageOptionText change">Browse Collection</p>
                </Link>
                <Link to = "/pokemon/bulbasaur" className='homePageOption changeBorder'>
                
                    <p className="homePageOptionText change">Select Individual Pokemon</p>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Homepage