import axios from "axios";
import { getCredentials } from "./credentials";

const baseUrl = "https://gateway.marvel.com/v1/public";

export const getCharacters = async (name) => {
  const nombre = name;
  try {
    const response = await axios.get(`${baseUrl}/characters?name=${nombre}`, {
      params: getCredentials(),
    });

    const characters = response.data.data.results.map((character) => ({
      id: character.id,
      name: character.name,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`, // Agregar la URL de la imagen
      description: character.description,
    }));

    return characters;
  } catch (error) {
    console.error("Error al obtener los personajes de Marvel:", error);
    return [];
  }
};
