import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    useEffect(() => {
        getRecipe();
    }, [])

    const getRecipe = async () => {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await response.data;

        setRecipe(data);
    }

    return (
        <div>
            <h2>{recipe.title}</h2>
            <Cont>
                <div>
                    <img src={recipe.image} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            </Cont>
        </div>
    )
}

const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    p {
        width: 40%;
    }
`

export default Details;