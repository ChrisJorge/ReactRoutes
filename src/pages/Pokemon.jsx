import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';

function Pokemon({setDarkMode, darkMode, update}) {
    const params = useParams();
    const name = params.name;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
   
    const [pokemon, setPokemon] = useState('null');
    const [image, setImage] = useState('null');
    const [type, setType] = useState('null');
    const [attack, setAttack] = useState('null');
    const [defense, setDefense] = useState('null');
    const [speed, setSpeed] = useState('null');
    const [health, setHealth] = useState('null');
    const [ weight, setWeight] = useState('null');
   

    const individualPokemon = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setImage(data.sprites.front_default);
            setType(data.types[0].type.name); 
            setHealth(data.stats[0].base_stat);
            setAttack(data.stats[1].base_stat);
            setDefense(data.stats[2].base_stat);
            setSpeed(data.stats[5].base_stat);
            setWeight(data.weight);
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
                        <h1 className='change'>{pokemon.name}</h1>
                        <img src={image} className='Image'/>
                        <div className="info">
                            <p className="infoText change">Type: {type}</p>
                            <p className="infoText change">HP: {health}</p>
                            <p className="infoText change">Attack: {attack}</p>
                            <p className="infoText change">Defense: {defense}</p>
                            <p className="infoText change">Speed: {speed}</p>
                            <p className="infoText change">Weight: {weight}lbs</p>
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