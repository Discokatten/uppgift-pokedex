import React from "react";
import { PokeUrl } from "@/lib/interfaces";

export default function TypeBadge({ name }: PokeUrl) {
  return <span className={`badge badge-${name}`}>{name}</span>;
}
