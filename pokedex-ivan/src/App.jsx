import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
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

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const btnPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const btnSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />

        {pokemonIndex > 0 && (
          <button onClick={btnPrecedent}>Précédent</button>
        )}

        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={btnSuivant}>Suivant</button>
        )}
      </div>
    </>
  );
}

export default App
