import React, { useRef, useState } from "react";
import { FaPizzaSlice, FaHamburger, FaIceCream } from 'react-icons/fa';
import { GiChopsticks } from 'react-icons/gi';
import { MdFastfood } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";

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


    const onMenuOpen = () => {
        setOpen(!open);

    }

    const [open, setOpen] = useState(false);
    return (
        <>
            <Cont>
                <div className={"menu-btn " + (open && "btn-active")}>
                    <GiHamburgerMenu onClick={onMenuOpen} />
                </div>
                <Form onSubmit={onSbm}>
                    <input type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="Search for a recipe" />
                    <button>Search</button>
                </Form>
            </Cont>
            <CSSTransition
                in={open}
                timeout={500}
                unmountOnExit
                classNames={"navbar"}
            >
                <div className="navbar-layout">
                    <Navbar setOpen={setOpen}/>
                </div>
            </CSSTransition>
        </>
    )
}

const Navbar = ({setOpen}) => {
    return (
        <Nav>
            <Link to={"/couisine/italian"} onClick={() => setOpen(false)}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Link>
            <Link to={"/couisine/american"} onClick={() => setOpen(false)}>
                <FaHamburger />
                <h4>American</h4>
            </Link>
            <Link to={"/couisine/japanese"} onClick={() => setOpen(false)}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </Link>
            <Link to={"/couisine/dessert"} onClick={() => setOpen(false)}>
                <FaIceCream />
                <h4>Dessert</h4>
            </Link>
            <Link to={"/couisine/street"} onClick={() => setOpen(false)}>
                <MdFastfood />
                <h4>Street Food</h4>
            </Link>
        </Nav>
    )
}

const Cont = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;

    position: relative;
`

const Nav = styled.div`
    padding: 10px;
    background-color: #ddd;
    width: 140px
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
    // flex-direction: column;
    align-items: center;
    justify-content: space-around;

    text-decoration: none;
    color: white;
    background: #404040;

    width: 120px;
    height: 30px;

    border-radius: 5px;
    margin-bottom: 5px;

    &:hover {
        opacity: 0.9;
    }
`

export default Header;