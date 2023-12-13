import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const pokemonList = [
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Mew",
    },
    {
      name: "Carapuce",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
  
  ];

  return (
    <>
      <div>
        <PokemonCard pokemon = {pokemonList[0]}/>
      </div>
      
    </>
  )
}

export default App
