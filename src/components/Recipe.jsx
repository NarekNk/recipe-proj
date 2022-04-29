import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Recipe = ({ title, image, id }) => {
    const navigate = useNavigate();
    
    return (
        <Card onClick={() => navigate(`/details/${id}`)}>
            <img src={image} alt={title} />
            <div>
                <h4>{title}</h4>
            </div>
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    margin: 20px 0;
    img {
        max-width: 250px;
        border-radius: 15px;
    }

    h4 {
        font-size: 12px;
    }

    div {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20%;
        z-index: 20;
        color: white;
        text-align: center;

        border-radius: 0 0 15px 15px;


        background: linear-gradient(#404040, #9198e5);
        opacity: 0.4;
        transition: 0.3s;
        &:hover {
            opacity: 1;
        }
    }
`

export default Recipe;