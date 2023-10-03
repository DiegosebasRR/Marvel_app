import { useEffect, useState } from "react";
import { getCharacters } from "./MarvelApi";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersData = await getCharacters();
      setCharacters(charactersData);
    };

    fetchCharacters();
  }, []);

  console.log(characters);
  return (
    <div>
      <h1>Personajes de Marvel</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.thumbnail} alt={character.name} />
            <h1>{character.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
