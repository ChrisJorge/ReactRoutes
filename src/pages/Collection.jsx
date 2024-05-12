import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Collection({setDarkMode, darkMode, update,}) {
  const [pokemon, setPokemon] = useState("null");
 const [num, setNum] = useState(10)

  const getData = async(num) => {
    try
    {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`)
      const data = await response.json()
      setPokemon(data)
    } catch(error)
    {
      console.error(error)
    }
}

  const changeNum = () => {
    let number = document.querySelector('.numPokemon').value
    try
    {
      number = parseInt(number)
      if(number > 0 && number <= 10000)
        {
          setNum(number)
        }
    }
    catch (error)
    {
      console.log(error)
    }
    

  }

  useEffect(() => {
    getData(num)
  }, [num])


const loaded = () => {
  return (
    <div>
        <Nav setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>
        <div className="buttonContainer">
          <input type='text' placeholder='Enter Number Of Pokemon' className='numPokemon changeBorder'/>
          <button onClick={changeNum} className='collectionBTN changeBorder'><p className='change'>Submit</p></button>
        </div>
        {pokemon.results.map((pokemon, i) =>
        {
          const {name, url} = pokemon
          
          return(
            <div className='collectionContainer'>
              
                <Link to={`/pokemon/${name}`}>
                <div className="card changeBorder">
                  <p className="pokemonName change" key={i}> {name}</p>
                </div>
                </Link>
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