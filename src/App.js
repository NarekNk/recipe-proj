import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from './components/Header';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Details from './components/Deatils';
import Couisine from './pages/Couisines';

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/"}>
        <Logo>Delicious</Logo>
      </Link>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchResults />} path="/search/:query" />
        <Route element={<Details />} path="/details/:id" />
        <Route element={<Couisine />} path="/couisine/:query" />
      </Routes>
    </BrowserRouter>
  );
}

const Logo = styled.h2`
  color: red;
  margin-top: 30px;
`

const Link = styled(NavLink)`
  text-decoration: none;
`

export default App;
