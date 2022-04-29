import axios from "axios";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import List from "./List";

const Meat = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipe();
    }, [])

    const getRecipe = async () => {

        const check = localStorage.getItem("meaty");

        if (check) {
            setRecipes(JSON.parse(check));
        } else {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=3&tags=meat&apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.data;

            localStorage.setItem("meaty", JSON.stringify(data.recipes));
            setRecipes(data.recipes);
        }
    }

    return (
        <>
            <h2>Meat recipes</h2>
            <List>
                {recipes.map(recipe => {
                    return <Recipe key={recipe.id} image={recipe.image} title={recipe.title} id={recipe.id}/>
                })}
            </List>
        </>
    )
}



export default Meat;