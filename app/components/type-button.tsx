"use client";
import { redirect } from "next/navigation";
import TypeBadge from "./TypeBadge";

export default function TypeButton({ types }: any) {
  function handleClick() {
    return redirect(`/types/`);
  }

  return types.map((res) => (
    <button onClick={handleClick}>
      <TypeBadge key={res.name} name={res.name} url={res.url} />
    </button>
  ));
}
