import React, { useState, useEffect } from "react";
import axios from 'axios'

const Index = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [call, setCall] = useState()

    const fetchEvent = () => {
        setCall(true)
    }

    useEffect (() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => {
                console.log(res.data.results);
                setPokemon(res.data.results)
            });
    },[]);

    useEffect(fetchEvent,[]);

    return (
        <>
            <button onClick={(event) => {
                fetchEvent()
            }}>Fetch Pokemon</button>
            {
            call ?
                <ul>
                    {
                        pokemon.map((pokemon, i) => {
                            return (
                                <li key= {i}>{pokemon.name}</li>
                            )
                        })
                    }
                </ul>
            :""
                }
        </>
    )
}

export default Index;