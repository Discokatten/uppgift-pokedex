import { fetchPokemonType } from "@/lib/data/pokemons";
import TypeButton from "../components/type-button";

export default async function PokemonTypes() {
  const { results } = await fetchPokemonType();
  if (!results) return;

  return (
    <ul className="  grid gap-4 grid-cols-[repeat(auto-fit,minmax(30ch,1fr))]">
      {results.map((type) => (
        <TypeButton key={type.name} name={type.name} url={type.url} />
      ))}
    </ul>
  );
}
