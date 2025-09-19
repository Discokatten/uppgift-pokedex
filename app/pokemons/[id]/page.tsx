import Card from "@/app/components/card";
import { fetchSinglePokemon } from "@/lib/data/pokemons";

export default async function PokemonId({
  params,
}: {
  params: Promise<{ id?: number }>;
}) {
  const { id } = await params;

  const pokemon = await fetchSinglePokemon(id);
  if (!pokemon) {
    return;
  }

  return <div className="flex justify-center">{<Card poke={pokemon} />} </div>;
}
