"use client";
import { redirect } from "next/navigation";

import { PokeUrl } from "@/lib/interfaces";

export default function TypeButton({ name }: PokeUrl) {
  function handleClick() {
    return redirect(`/types/${name}`);
  }

  return (
    <span className={`badge badge-${name}`}>
      <button onClick={handleClick}>{name}</button>
    </span>
  );
}
