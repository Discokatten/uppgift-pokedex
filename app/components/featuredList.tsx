import {
  fetchAllPokemons,
  fetchSinglePokemon,
  getRandomPokemons,
} from "@/lib/data/pokemons";
import { getRandomInt } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedList() {
  const { results } = await fetchAllPokemons();
  // const randomId = getRandomPokemons()
  // console.log(randomId)
  return (
    <ul className="text-black text-bold text-1xl bg-purple-200 m-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(30ch,1fr))]">
      {/* TODO: Make first char uppercase, add spacing and center content */}
      {/* takes pokemons from result, maps name and sends to fetch single pokemon */}
      {await Promise.all(
        results.map(async (results) => {
          const getPokes = results.name;
          const pokemon = await fetchSinglePokemon(getPokes);
          return (
            <li
              key={pokemon.order}
              className="bg-blue-100 rounded-md flex justify-center h-100 border-2 border-b-sky-600 p-8 m-8"
            >
              <Link
                href={`/pokemons/${pokemon.order}`}
                className="text-2xl font-bold hover:text-gray-700"
              >
                <Image
                  className="rounded-full p-1 bg-amber-50"
                  src={pokemon.img}
                  alt={pokemon.name}
                  width={200}
                  height={300}
                />
                {pokemon.name}
              </Link>
            </li>
          );
        })
      )}
    </ul>
  );
}
