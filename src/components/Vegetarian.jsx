import axios from "axios";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import List from "./List";

const Vegetarian = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipe();
    }, [])

    const getRecipe = async () => {

        const check = localStorage.getItem("vegetarian");

        if (check) {
            setRecipes(JSON.parse(check));
        } else {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=5&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.data;

            localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
            setRecipes(data.recipes);
        }

    }

    return (
        <>
            <h2>Vegetarian</h2>
            <List>
                {recipes.map(recipe => {
                    return <Recipe key={recipe.id} image={recipe.image} title={recipe.title} id={recipe.id}/>
                })}
            </List>
        </>
    )
}


export default Vegetarian;