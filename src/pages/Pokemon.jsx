import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';

function Pokemon({setDarkMode, darkMode, update}) {
    const params = useParams();
    const name = params.name;
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
   
    const [pokemon, setPokemon] = useState(null);
   

    const switchPokemon = () => {
        try{
            let newPokemon = document.querySelector('.newPokemon').value
            url = `https://pokeapi.co/api/v2/pokemon/${newPokemon}`
            individualPokemon()
        }
        catch(e)
        {
            console.log(e)
        }
    }

    const individualPokemon = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPokemon(data);
        } catch (e)
        {
            console.error(e);
        };
    };

    useEffect(() => 
    {
        individualPokemon();
    }, []);
  
    const loaded = () => {
        return(
            <div>
                <Nav setDarkMode = {setDarkMode} darkMode = {darkMode} update = {update}/>
                <div className="masterContainer">
                    <div className='pokemonContainer'>
                        <div className="inputContainer">
                            <input  typeof='text' placeholder='Enter A Pokemon' className='newPokemon changeBorder'/>
                            <button className='pokemonBTN changeBorder' onClick={switchPokemon}><p className='change'>Submit</p></button>
                        </div>
                        <h1 className='change'>{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} className='Image changeBorder'/>
                        <div className="info">
                            <p className="infoText change">Type: {pokemon.types[0].type.name}</p>
                            <p className="infoText change">HP: {pokemon.stats[0].base_stat}</p>
                            <p className="infoText change">Attack: {pokemon.stats[1].base_stat}</p>
                            <p className="infoText change">Defense: {pokemon.stats[2].base_stat}</p>
                            <p className="infoText change">Speed: {pokemon.stats[5].base_stat}</p>
                            <p className="infoText change">Weight: {pokemon.weight}lbs</p>
                        </div> 
                    </div>
                </div>
            </div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return pokemon ? loaded() : loading();
}

export default Pokemon;