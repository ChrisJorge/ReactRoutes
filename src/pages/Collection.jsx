import React from 'react'
import Nav from '../components/Nav'
function Collection({setDarkMode, darkMode, update}) {
  return (
    <div>
        <Nav setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>
        Collection
    </div>
  )
}

export default Collection