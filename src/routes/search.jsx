import logo from "../assets/logo.png";
import { Form, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getCharacters } from "../MarvelApi";
import { createHeroe } from "../heroes";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    getCharacters(searchValue)
      .then((response) => {
        createHeroe(response);
        const id = response[0].id;
        navigate(`/`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Marvel Logo" />
        </div>
        <div className="search-container">
          <Form>
            <input
              type="text"
              placeholder="Buscar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>
          <button type="submit" onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Search;
