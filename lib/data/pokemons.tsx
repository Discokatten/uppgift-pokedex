import { PokeResponse, PokeUrl, Pokemon, PokeTypeRes } from "../interfaces";
const baseurl = `https://pokeapi.co/api/v2/pokemon`;

export async function fetchAllPokemons(limit = 1100, offset = 0) {
  try {
    const response = await fetch(`${baseurl}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error("bad response");
    }
    const data: PokeResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
export async function fetchPokemonType() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type`);
    const data: PokeTypeRes = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

export async function fetchSinglePokemon(name: any | []) {
  const identifier = `/${name}`;
  try {
    const response = await fetch(`${baseurl}${identifier}`);
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    // get detsired data
    const {
      sprites: {
        other: {
          "official-artwork": { front_default: img },
        },
      },
      stats: {
        0: { base_stat: hp },
        1: { base_stat: attack },
        2: { base_stat: defense },
      },
      name,
      id,
      types,
    } = data;
    // creates new object with desired data
    const pokemon: Pokemon = {
      img,
      name,
      id,
      hp,
      attack,
      defense,
      types,
    };
    // checks if we get an name as response TODO: make custom notFound-page
    if (!pokemon.img) {
      return;
    }

    return pokemon;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
