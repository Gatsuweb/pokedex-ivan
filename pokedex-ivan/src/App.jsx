import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import './App.css'

function App() {

  const pokemonList = [
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  useEffect(() => {
    alert("Choose your starter !")
}, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePokemonCLick = (pokemonIndex) => {
    
    setPokemonIndex(pokemonIndex);

    if (pokemonIndex === 0) {
      alert("J'suis le starter préféré des gens choisi moi !!!");
    }

    if (pokemonIndex === 1) {
      alert("J'ai un bourgeon sur le dos mais je suis mim's, regarde ce sourire !");
    }

    if (pokemonIndex === 2) {
      alert("Je suis la version évoluée d'une tortue !");
    }

    if (pokemonIndex === 3) {
      alert("pika pikachu !!!");
    }

    if (pokemonIndex === 4) {
      alert("J'suis pas un starter bouge !!!");
    }
   
};

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <NavBar handlePokemonCLick={handlePokemonCLick} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
      </div>
    </>
  );
}

export default App
