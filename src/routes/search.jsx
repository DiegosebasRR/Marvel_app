import logo from "../assets/logo.png";
import { Form, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCharacters } from "../MarvelApi";
import useHero from "../hooks/useHero";

const Search = () => {
  const heroes = useHero((state) => state.heroes);
  const updateHeroes = useHero((state) => state.updateHeroes);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    getCharacters(searchValue)
      .then((response) => {
        const id = `${response[0].id}`;
        updateHeroes([...heroes, { id, response }]);
        navigate(`heroe/${id}`);
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
