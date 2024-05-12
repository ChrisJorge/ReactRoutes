import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

function Pokemon({setDarkMode, darkMode, update}) {
    const params = useParams()
    const name = params.name
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
   
    const [pokemon, setPokemon] = useState('null')
    const [image, setImage] = useState('null')

    const individualPokemon = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setImage(data.sprites.front_default)
            setPokemon(data);
        } catch (e)
        {
            console.error(e)
        }
    };

    useEffect(() => 
    {
        individualPokemon()
    }, [])
  
    const loaded = () => {
        return(
            <div>
                <Nav setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>
                <div className='pokemonContainer'>
                    <h1 className='change'>{pokemon.name}</h1>
                     <img src={image} className='Image'/>  
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return pokemon ? loaded() : loading()
}

export default Pokemon