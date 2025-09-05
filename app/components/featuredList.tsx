import { fetchSinglePokemon } from "@/lib/data/pokemons";
import { getRandomInt, randomize } from "@/lib/util";
import Card2 from "../components/card2";

export default async function FeaturedList() {
  // tar emot en array av random nummer
  const randomId = getRandomInt();

  const hej = await randomize(4);

  console.log("HEJ", hej);
  return (
    <section className="text-black text-bold text-1xl bg-purple-100">
      <h2 className="justify-self-center text-3xl">Featured Pokémon</h2>
      <ul className="  grid gap-4 grid-cols-[repeat(auto-fit,minmax(30ch,1fr))]">
        {/* TODO: Make first char uppercase */}
        {await Promise.all(
          randomId.map(async (results) => {
            const getPokes = results;
            const pokemon = await fetchSinglePokemon(getPokes);
            if (!pokemon) {
              return;
            }
            return (
              <div key={pokemon.name}>
                <Card2 poke={pokemon} />
              </div>
            );
          })
        )}
      </ul>
    </section>
  );
}
