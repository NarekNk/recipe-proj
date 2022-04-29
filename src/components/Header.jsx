import React, { useState } from "react";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks } from 'react-icons/gi';
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState("");
    const onSbm = (e) => {
        e.preventDefault()
        if (search.length > 0) {
            navigate("/search/" + search)
        } else return;
        setSearch('');
    }
    return (
        <Cont>
            <Nav>
                <Link to={"/couisine/italian"}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </Link>
                <Link to={"/couisine/american"}>
                    <FaHamburger />
                    <h4>American</h4>
                </Link>
                <Link to={"/couisine/japanese"}>
                    <GiChopsticks />
                    <h4>Japanese</h4>
                </Link>
            </Nav>
            <Form onSubmit={onSbm}>
                <input type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="Search for a recipe"/>
                <button>Search</button>
            </Form>
        </Cont>
    )
}

const Cont = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
`

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    input {
        padding: 10px;
        width: 400px;
        border: none;
        box-shadow: 0 0 2px 2px lightgray;
    }
    button {
        padding: 10px;
        border: none;
        color: white;
        background-color: #404040;
        box-shadow: 0 0 2px 2px lightgray;
    }
`

const Link = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    text-decoration: none;
    color: white;
    background: #404040;

    width: 90px;
    height: 60px;

    border-radius: 10px;
    margin-right: 20px;

    h4 {
        margin-top: 0;
        margin-bottom: 10px;
    }
`

export default Header;