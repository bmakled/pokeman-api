import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [view, setView] = useState(false)

  const retrieve = (e) => {
    const allpokemon =  pokemon.map((pokemonObj,index)=>{
      return pokemonObj.name
    })
    setPokemon(allpokemon)
    setView(true)
    console.log(allpokemon)
  }

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => {
        return response .json()
      })
      .then(response => {
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
    },[]);

  return (
    <div className="App">
      <div>
        <button onClick={(event)=>{retrieve(event)}}>Fetch Pokemon</button>
          {
            //if view has been set to true
            (view)? 
            //then do all this stuff
            pokemon.map((pokemonObj,index)=>{ 
              return <li>{pokemonObj}</li>
            })
            :null
          }
      </div>
    </div>
  );
}

export default App;
