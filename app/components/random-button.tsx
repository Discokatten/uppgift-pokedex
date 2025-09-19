"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getRandomInt } from "@/lib/utils/randomize";

export default function RandomButton() {
  function handleClick() {
    // get a random number, set max-value and limit
    const random = getRandomInt(1100, 1);
    // redirect to random number-pokemon
    return redirect(`/pokemons/${random}`);
  }

  return (
    <div>
      <button className="btn-primary" onClick={handleClick}>
        <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
        Random Pokémon
      </button>
    </div>
  );
}
