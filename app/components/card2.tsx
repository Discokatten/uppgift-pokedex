import { Pokemon } from "@/lib/interfaces";
import Link from "next/link";
import Image from "next/image";
import TypeBadge from "@/app/components/TypeBadge";

export default async function PokemonId({ poke }: { poke: Pokemon }) {
  if (!poke) return;

  return (
    <div>
      <li
        key={poke.id}
        className="bg-blue-100 rounded-md flex justify-center h-120 w-70 border-4 border-sky-700 p-8 m-8"
      >
        <Link
          href={`/pokemons/${poke.id}`}
          className=" text-2xl text-center hover:text-gray-700"
        >
          <Image
            className="rounded-full p-1 bg-white border-3 border-gray-400
            "
            src={poke.img}
            alt={poke.name}
            width={200}
            height={300}
          />
          <p className=" rounded-xl font-bold">#{poke.id}</p>
          <h2>{poke.name}</h2>
          <section className="font-bold">
            {poke.types.map((t) => (
              <TypeBadge
                key={t.type.name}
                name={t.type.name}
                url={t.type.url}
              />
            ))}
            <p>HP: {poke.hp}</p>
            <p>Attack: {poke.attack}</p>
            <p>Defense: {poke.defense}</p>
          </section>
        </Link>
      </li>
    </div>
  );
}
