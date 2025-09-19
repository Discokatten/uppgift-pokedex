export interface PokeResponse {
  count: string;
  next: string;
  previous: string;
  results: PokeUrl[];
}
export interface PokeUrl {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  img: string;
  id: number;
  order?: string;
  hp?: number;
  attack?: number;
  defense?: number;
  types: Type[];
}
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}