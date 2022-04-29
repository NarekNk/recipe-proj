import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";
import List from "../components/List";

const SearchResults = () => {

    const [results, setResults] = useState([]);
    let { query } = useParams();

    useEffect(() => {
        getSearchResults();
    }, [query])

    const getSearchResults = async () => {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=9&query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.data;
        setResults(data.results);

    }

    return (
        <List>
            {results.map(recipe => {
                return <Recipe key={recipe.id} image={recipe.image} title={recipe.title} id={recipe.id}/>
            })}
        </List>
    )
}



export default SearchResults;