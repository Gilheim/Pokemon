import { useState, useEffect } from 'react'
import { PokemonTable } from './components'
import { PokemonForm } from './components'

function App() {
    const [inputText, setInputText] = useState('')
    const [pokemon, setPokemon] = useState([])

    return (
        <>
        <PokemonForm pokemon = {pokemon} setPokemon = {setPokemon} inputText = {inputText} setInputText = {setInputText} />
        <PokemonTable pokemon = {pokemon} />
        </>
    )
}

export default App
