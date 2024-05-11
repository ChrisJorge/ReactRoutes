import React from 'react'
import Nav from '../components/Nav'
import CollectionItem from '../components/CollectionItem'
import { useEffect, useState } from 'react'

function Collection({setDarkMode, darkMode, update,}) {
  const [pokemon, setPokemon] = useState("null");
  
  const getData = async() => {
    try
    {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      const data = await response.json()
      console.log(data.results);
      setPokemon(data)
    } catch(error)
    {
      console.error(error)
    }
}


  useEffect(() => {
    getData()
  }, [])


const loaded = () => {
  
  return (
    <div>
        <Nav setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>
        {pokemon.results.map((pokemon, i) =>
        {
          const {name, url} = pokemon
          return(
            <div className='collectionContainer'>
              <div className="card changeBorder">
                  <p className="pokemonName change">{name}</p>
              </div>
            </div>
          )

        })}
    </div>
  )
}

const loading = () => {
    return (<div><h1>Loading....</h1> </div>)
}

return pokemon !== 'null' ? loaded() : loading();
}

export default Collection