import { PokeResponse, Pokemon } from "../interfaces";
import { getRandomInt } from "../util";

// can take limit and offset- else these are the default-values
export async function fetchAllPokemons(limit = 4, offset = 0) {
  // fetch 5 pokemons from pokeapi, starting at 0
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(endpoint);
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

export async function getRandomPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data: PokeResponse = await response.json();
  const randomId = getRandomInt(Number(data.count));
  return randomId;
}

// Todo: change try catch to catch error for every api-call
export async function fetchSinglePokemon(name: string) {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    // get detsired data
    const {
      sprites: {
        other: {
          "official-artwork": { front_default: img },
        },
      },
      name,
      //   renaming id to order, for later sorting
      id: order,
    } = data;
    // creates new object with desired data
    const pokemon: Pokemon = {
      img,
      name,
      order,
    };

    // checks if we get an image as response TODO: make custom notFound-page
    if (!pokemon.img) {
      // return notFound()
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
