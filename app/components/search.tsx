"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // useDebounce to delay the inputValue being sent
  const handleChange = useDebouncedCallback((inputValue: string) => {
    const params = new URLSearchParams(searchParams);

    if (inputValue) {
      params.set("query", inputValue);
    } else {
      params.delete("query");
    }
    replace(`pokemons/?${params.toString()}`);
  }, 600);

  return (
    <section className="p-9 bg-white flex justify-around">
      <form>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="bg-transparent --font-jaldi placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search for a Pokémon"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </form>
    </section>
  );
}
