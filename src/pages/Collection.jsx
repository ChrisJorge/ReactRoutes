import React from 'react'
import Nav from '../components/Nav'
function Collection({setDarkMode, darkMode}) {
  return (
    <div>
        <Nav setDarkMode = {setDarkMode} darkMode = {darkMode}/>
        Collection
    </div>
  )
}

export default Collection