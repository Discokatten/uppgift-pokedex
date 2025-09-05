import { fetchAllPokemons, fetchSinglePokemon } from "@/lib/data/pokemons";
import Card2 from "@/app/components/card2";
export default async function PokemonId({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { results } = await fetchAllPokemons(10, 0);
  if (!results) return
  const { results: all } = await fetchAllPokemons();
const {query} = await searchParams
if (!query) return
const foundPokemons = all.filter((p) =>p.name.includes(query) )

  return (
    <div>
      <h2 className="justify-self-center text-3xl"></h2>
      <ul className="  grid gap-4 grid-cols-[repeat(auto-fit,minmax(30ch,1fr))]">
       {/* {foundPokemons.map((pokemon, index) => {
        <li key={index}>
            <p>{pokemon.name}</p>
        {/* <Card2 poke={pokemon}/> */}
        {/* </li>  })}   */}
       
       {/* find first 10 pokemons and render */}
        {await Promise.all(
          foundPokemons.map(async (results, index) => {
            const getPokes = results.name;
            console.log(getPokes);
            const pokemon = await fetchSinglePokemon(getPokes);
            if (!pokemon) {
              return;
            }
            return (
              <div key={index}>
                <Card2 poke={pokemon} />
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}
