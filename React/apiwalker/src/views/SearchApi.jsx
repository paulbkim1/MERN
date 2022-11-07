import React,{ useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export const SearchApi = (props) => {
    const [searches, setSearches] = useState({});
    const {search, id} = useParams()
    const [error, setError] = useState()

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${search}/${id}/`)
            .then((res) => {
                console.log(res.data)
                setSearches(res.data)
                setError(false)
            })
            .catch((err) => {
                setError(true)
                console.log("error", err)
            })
    },[id, search])

    if (error === true) {
        return <NotFound/>
    }

    else if (search === "people") {
        return ( 
            <div>
                {
                    <div>
                        <h1>Person name: {searches.name}</h1>
                        <h4>Gender: {searches.gender}</h4>
                        <h4>Hair color: {searches.hair_color}</h4>
                        <h4>Skin color: {searches.skin_color}</h4>
                        <h4>Eye color: {searches.eye_color}</h4>
                        <h4>Mass: {searches.mass}</h4>
                    </div>
                }
            </div>
        )
    }
    else if (search === "planets") {
        return ( 
            <div>
                {
                    <div>
                        <h1>Planet name: {searches.name}</h1>
                        <h4>Climate: {searches.climate}</h4>
                        <h4>Orbital Period: {searches.orbital_period}</h4>
                        <h4>Diameter: {searches.diameter}</h4>
                        <h4>Terrain: {searches.terrain}</h4>
                        <h4>Gravity: {searches.gravity}</h4>
                    </div>
                }
            </div>
        )
    }
}